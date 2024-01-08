import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { MetamaskActions, MetaMaskContext } from '../hooks';
import { connectSnap, getMetaMaskSnapSeiWallet, getSnap, isLocalSnap, shouldDisplayReconnectButton } from '../utils';
import { Card, ConnectButton, InstallFlaskButton, ReconnectButton } from '../components';
import { calculateFee, Coin, DeliverTxResponse, StdFee } from '@cosmjs/stargate';
import { COMPASS_WALLET, createSeiAminoTypes, createSeiRegistry, getSigningClient, getStargateClient } from '@sei-js/core';
import { makeSignDoc, decodeSignature, encodeSecp256k1Pubkey } from '@cosmjs/amino';
import { encodePubkey, makeAuthInfoBytes, TxBodyEncodeObject } from '@cosmjs/proto-signing';
import { SignMode } from 'cosmjs-types/cosmos/tx/signing/v1beta1/signing';
import { fromBase64 } from '@cosmjs/encoding';
import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import { Int53 } from '@cosmjs/math';
import { toast } from 'react-toastify';
import { HiBadgeCheck, HiOutlineGlobe, HiX } from 'react-icons/hi';
import { JsonView, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1;
	gap: 1rem;
	padding: 2rem;
	overflow: auto;
	max-height: 100%;
	${({ theme }) => theme.mediaQueries.small} {
		width: auto;
	}
`;

const Heading = styled.h2`
	text-align: center;
	margin: 0;
`;

const Span = styled.span`
	color: ${(props) => props.theme.colors.primary.defaultDark};
	font-weight: 900;
	background-color: ${(props) => props.theme.colors.primary.default};
	font-size: 2.5rem;
	padding: 0.5rem 2rem;
	border-radius: 4rem;
`;

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	gap: 2rem;
`;

const ErrorMessage = styled.div`
	background-color: ${({ theme }) => theme.colors.error.muted};
	border: 1px solid ${({ theme }) => theme.colors.error.default};
	color: ${({ theme }) => theme.colors.error.alternative};
	border-radius: ${({ theme }) => theme.radii.default};
	padding: 2.4rem;
	margin-bottom: 2.4rem;
	margin-top: 2.4rem;
	max-width: 60rem;
	width: 100%;
	${({ theme }) => theme.mediaQueries.small} {
		padding: 1.6rem;
		margin-bottom: 1.2rem;
		margin-top: 1.2rem;
		max-width: 100%;
	}
`;

const LinkRow = styled.a`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 1rem;
	max-width: 100%;

	&:hover {
		opacity: 0.5;
	}
`;

const RowDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 1rem;
	max-width: 100%;
`;

const RefetchButton = styled.button<{ isRefetch: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 800;
	color: ${(props) => (props.isRefetch ? props.theme.colors.text.alternative : props.theme.colors.text.inverse)};
	font-size: ${(props) => props.theme.fontSizes.small};
	border-radius: ${(props) => props.theme.radii.button};
	background-color: ${({ theme, isRefetch }) => (isRefetch ? '#f1f1f122' : theme.colors.background.inverse)};
	border: ${({ theme, isRefetch }) => (isRefetch ? `2px solid ${theme.colors.background.inverse}44` : `2px solid ${theme.colors.background.inverse}`)};
	padding: 1rem;
	min-height: 4.2rem;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		border: 1px solid ${(props) => props.theme.colors.background.inverse};
		color: ${(props) => props.theme.colors.text.default};
	}

	&:disabled,
	&[disabled] {
		border: 1px solid ${(props) => props.theme.colors.background.inverse};
		cursor: not-allowed;
	}

	&:disabled:hover,
	&[disabled]:hover {
		background-color: ${(props) => props.theme.colors.background.inverse};
		color: ${(props) => props.theme.colors.text.inverse};
		border: 1px solid ${(props) => props.theme.colors.background.inverse};
	}
`;

const SpreadDiv = styled(RowDiv)`
	justify-content: space-between;
`;

const CardCodeRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	overflow: auto;
	background-color: #eee;
	padding: 2rem;
	border-radius: 0.5rem;
	border: #121212 solid 1px;
`;

const chainId = 'atlantic-2';
const rpcUrl = 'https://rpc.atlantic-2.seinetwork.io';
const ADR36_MESSAGE = 'testing sign and verify arbitrary';

const createBankSendSignDoc = async (
	senderAddress: string,
	recipientAddress: string,
	amount: Coin[],
	fee: StdFee,
	memo: string,
	chainId: string,
	accountNumber: number,
	sequence: number
) => {
	const sendMsg = {
		type: 'cosmos-sdk/MsgSend',
		value: {
			from_address: senderAddress,
			to_address: recipientAddress,
			amount
		}
	};

	return makeSignDoc([sendMsg], fee, chainId, memo, accountNumber.toString(), sequence.toString());
};

const Index = () => {
	const [state, dispatch] = useContext(MetaMaskContext);

	const [firstAccountAddress, setFirstAccountAddress] = useState<string>(null);
	const [isVerified, setIsVerified] = useState<boolean>(null);
	const [isSendingDirect, setIsSendingDirect] = useState<boolean>(false);
	const [isSendingAmino, setIsSendingAmino] = useState<boolean>(false);
	const [isSigningAndVerifying, setIsSigningAndVerifying] = useState<boolean>(false);
	const [bankSendDirectResponse, setBankSendDirectResponse] = useState<DeliverTxResponse>(null);
	const [bankSendAminoResponse, setBankSendAminoResponse] = useState<DeliverTxResponse>(null);
	const [signArbitraryResponse, setSignArbitraryResponse] = useState<object>(null);

	const origin = import.meta.env.VITE_SNAP_ID || `npm:@sei-js/metamask-snap`;

	// Can use COMPASS_WALLET to verify things are the same as Compass wallet after inputting the seed phrase from MM Flask into Compass
	// const metamaskSnap = COMPASS_WALLET;
	const metamaskSnap = getMetaMaskSnapSeiWallet(origin);

	const isMetaMaskReady = isLocalSnap(origin) ? state.isFlask : state.snapsDetected;

	const fetchAccountAddress = async () => {
		try {
			const accounts = await metamaskSnap.getAccounts(chainId);
			setFirstAccountAddress(accounts[0].address);
		} catch (e) {
			toast.error(e.message);
		}
	};

	const bankSendDirect = async () => {
		try {
			if (isSendingDirect) return;
			setIsSendingDirect(true);
			const offlineSignerAmino = await metamaskSnap.getOfflineSigner(chainId);
			const signingClient = await getSigningClient(rpcUrl, offlineSignerAmino);
			const accounts = await metamaskSnap.getAccounts(chainId);
			const account = accounts[0];

			const response = await signingClient.sendTokens(
				account.address,
				'sei14ae4g3422thcyuxler2ws3w25fpesrh2uqmgm9',
				[{ amount: '100', denom: 'usei' }],
				calculateFee(100000, '0.1usei'),
				'Test Bank Send Direct'
			);

			setBankSendDirectResponse(response);
			setIsSendingDirect(false);
		} catch (e) {
			toast.error(e.message);
			setIsSendingDirect(false);
		}
	};

	const bankSendAmino = async () => {
		try {
			if (isSendingAmino) return;
			setIsSendingAmino(true);
			const broadcaster = await getStargateClient(rpcUrl);
			const accounts = await metamaskSnap.getAccounts(chainId);
			const account = accounts[0];

			const fetchedAccount = await broadcaster.getAccount(account.address);

			const offlineSignerAmino = await metamaskSnap.getOfflineSignerAmino(chainId);

			const recipient = 'sei14ae4g3422thcyuxler2ws3w25fpesrh2uqmgm9';
			const amount = [{ amount: '100', denom: 'usei' }];
			const fee = calculateFee(100000, '0.1usei');
			const memo = 'Test Bank Send Amino';

			const stdSignDoc = await createBankSendSignDoc(account.address, recipient, amount, fee, memo, chainId, fetchedAccount.accountNumber, fetchedAccount.sequence);

			const { signature, signed } = await offlineSignerAmino.signAmino(account.address, stdSignDoc);

			const registry = createSeiRegistry();
			const aminoTypes = createSeiAminoTypes();

			const signedTxBody = {
				messages: signed.msgs.map((msg) => aminoTypes.fromAmino(msg)),
				memo: signed.memo
			};

			const signedTxBodyEncodeObject: TxBodyEncodeObject = {
				typeUrl: '/cosmos.tx.v1beta1.TxBody',
				value: signedTxBody
			};

			const signedTxBodyBytes = registry.encode(signedTxBodyEncodeObject);
			const signedGasLimit = Int53.fromString(signed.fee.gas).toNumber();
			const signedSequence = Int53.fromString(signed.sequence).toNumber();
			const signMode = SignMode.SIGN_MODE_LEGACY_AMINO_JSON;

			const { pubkey: decodedPubkey } = decodeSignature(signature);
			const pubkey = encodePubkey(encodeSecp256k1Pubkey(decodedPubkey));

			const signedAuthInfoBytes = makeAuthInfoBytes([{ pubkey: pubkey, sequence: signedSequence }], signed.fee.amount, signedGasLimit, '', '', signMode);

			const txRaw = TxRaw.fromPartial({
				bodyBytes: signedTxBodyBytes,
				authInfoBytes: signedAuthInfoBytes,
				signatures: [fromBase64(signature.signature)]
			});
			const txBytes = TxRaw.encode(txRaw).finish();

			const response = await broadcaster.broadcastTx(txBytes);
			setBankSendAminoResponse(response);
			setIsSendingAmino(false);
		} catch (e) {
			toast.error(e.message);
			setIsSendingAmino(false);
		}
	};

	const signAndVerifyArbitrary = async () => {
		try {
			if (isSigningAndVerifying) return;
			setIsSigningAndVerifying(true);
			const accounts = await metamaskSnap.getAccounts(chainId);
			const account = accounts[0];
			const signArbitraryResponse = await metamaskSnap.signArbitrary(chainId, account.address, ADR36_MESSAGE);
			setSignArbitraryResponse(signArbitraryResponse);

			const verified = await metamaskSnap.verifyArbitrary(chainId, account.address, ADR36_MESSAGE, signArbitraryResponse);
			setIsVerified(verified);
			setIsSigningAndVerifying(false);
		} catch (e) {
			setIsVerified(false);
			setIsSigningAndVerifying(false);
			toast.error(e.message);
		}
	};

	const handleConnectClick = async () => {
		try {
			const origin = import.meta.env.VITE_SNAP_ID || `npm:@sei-js/metamask-snap`;
			await connectSnap(origin);
			const installedSnap = await getSnap(origin);

			dispatch({
				type: MetamaskActions.SetInstalled,
				payload: installedSnap
			});
		} catch (e) {
			console.error(e);
			dispatch({ type: MetamaskActions.SetError, payload: e });
		}
	};

	const renderAccountTests = () => {
		if (!isMetaMaskReady) return null;

		return (
			<>
				<Card
					content={{
						title: 'Test 1: Fetch Account',
						button: (
							<RefetchButton isRefetch={!!firstAccountAddress} onClick={fetchAccountAddress} disabled={!state.installedSnap}>
								Fetch account
							</RefetchButton>
						)
					}}
					disabled={!state.installedSnap}>
					{firstAccountAddress ? (
						<RowDiv>
							<HiBadgeCheck color='#00d1b2' size={24} />
							<p style={{ color: '#00d1b2', fontWeight: 700, margin: 0 }}>{firstAccountAddress}</p>
						</RowDiv>
					) : (
						<p>Fetch the account associated with your MM snap by clicking the button below.</p>
					)}
				</Card>
				<Card
					content={{
						title: 'Test 2: Direct Signing (Bank Send)',
						button: (
							<RefetchButton isRefetch={!!bankSendDirectResponse?.transactionHash} onClick={bankSendDirect} disabled={!state.installedSnap}>
								Direct Signing Bank Send
							</RefetchButton>
						)
					}}
					isLoading={isSendingDirect}
					disabled={!state.installedSnap}>
					{bankSendDirectResponse?.transactionHash ? (
						<SpreadDiv>
							<RowDiv>
								<HiBadgeCheck color='#00d1b2' size={24} />
								<p style={{ fontWeight: 700, margin: 0, color: '#00d1b2' }}>Transaction success</p>
							</RowDiv>
							<LinkRow href={`https://seiscan.app/${chainId}/tx/${bankSendDirectResponse.transactionHash}`} target='_blank'>
								<HiOutlineGlobe color='#f1f1f1' style={{ cursor: 'pointer' }} size={24} />
								<p style={{ fontWeight: 700, margin: 0, color: '#f1f1f1' }}>view on explorer</p>
							</LinkRow>
						</SpreadDiv>
					) : (
						<p>
							Bank Send <b>100usei</b> to <b>sei14ae4g3422thcyuxler2ws3w25fpesrh2uqmgm9</b> from the connected account using <b>direct</b> signing.
						</p>
					)}
				</Card>
				<Card
					content={{
						title: 'Test 3: Amino Signing (Bank Send)',
						button: (
							<RefetchButton onClick={bankSendAmino} isRefetch={!!bankSendAminoResponse?.transactionHash} disabled={!state.installedSnap}>
								Amino Signing Bank Send
							</RefetchButton>
						)
					}}
					isLoading={isSendingAmino}
					disabled={!state.installedSnap}>
					{bankSendAminoResponse?.transactionHash ? (
						<SpreadDiv>
							<RowDiv>
								<HiBadgeCheck color='#00d1b2' size={24} />
								<p style={{ fontWeight: 700, margin: 0, color: '#00d1b2' }}>Transaction success</p>
							</RowDiv>
							<LinkRow href={`https://seiscan.app/${chainId}/tx/${bankSendAminoResponse.transactionHash}`} target='_blank'>
								<HiOutlineGlobe color='#f1f1f1' style={{ cursor: 'pointer' }} size={24} />
								<p style={{ fontWeight: 700, margin: 0, color: '#f1f1f1' }}>view on explorer</p>
							</LinkRow>
						</SpreadDiv>
					) : (
						<p>
							Bank Send <b>100usei</b> to <b>sei14ae4g3422thcyuxler2ws3w25fpesrh2uqmgm9</b> from the connected account using <b>amino</b> signing.
						</p>
					)}
				</Card>
				<Card
					content={{
						title: 'Test 4: Sign and verify arbitrary',
						button: (
							<RefetchButton isRefetch={!!signArbitraryResponse} onClick={signAndVerifyArbitrary} disabled={!state.installedSnap}>
								Sign ADR36 (Arbitrary) and verify response
							</RefetchButton>
						)
					}}
					isLoading={isSigningAndVerifying}
					disabled={!state.installedSnap}>
					{signArbitraryResponse ? (
						<>
							<p style={{ color: '#f1f1f188', margin: 0, textTransform: 'uppercase' }}>SIGN ARBITRARY INPUT</p>
							<CardCodeRow>
								<JsonView style={defaultStyles} data={ADR36_MESSAGE} />
							</CardCodeRow>
							<p style={{ color: '#f1f1f188', margin: 0, textTransform: 'uppercase' }}>SIGN ARBITRARY RESPONSE</p>
							<CardCodeRow>
								<JsonView style={defaultStyles} data={signArbitraryResponse} />
							</CardCodeRow>
						</>
					) : (
						<p>
							ADR36 Sign string '<b>{ADR36_MESSAGE}</b>' and then verify it.
						</p>
					)}
					{signArbitraryResponse && (
						<>
							<p style={{ color: '#f1f1f188', margin: 0, textTransform: 'uppercase' }}>Verify Arbitrary Response</p>
							{!!isVerified ? (
								<RowDiv style={{ margin: 0, backgroundColor: '#121212', padding: '2rem 1rem', borderRadius: '0.5rem' }}>
									<HiBadgeCheck color='#00d1b2' size={24} />
									<p style={{ margin: 0, color: '#00d1b2', fontWeight: 800 }}>verified</p>
								</RowDiv>
							) : (
								isVerified !== null && (
									<RowDiv>
										<HiX color='#f87171' size={'2.5rem'} />
										<p style={{ color: '#f87171', fontSize: '2rem', margin: 0 }}>Error verifying signArbitrary response</p>
									</RowDiv>
								)
							)}
						</>
					)}
				</Card>
			</>
		);
	};

	const renderContainerContent = () => {
		if (state.error) {
			return (
				<ErrorMessage>
					<b>An error happened:</b> {state.error.message}
				</ErrorMessage>
			);
		}

		if (!isMetaMaskReady) {
			return (
				<Card
					content={{
						title: 'Install',
						button: <InstallFlaskButton />
					}}>
					<p>Snaps is pre-release software only available in MetaMask Flask, a canary distribution for developers with access to upcoming features.</p>
				</Card>
			);
		}

		if (!state.installedSnap) {
			return (
				<Card
					content={{
						title: 'Connect',
						button: <ConnectButton onClick={handleConnectClick} disabled={!isMetaMaskReady} />
					}}
					disabled={!isMetaMaskReady}>
					<p style={{ margin: 0 }}>Get started by connecting to and installing the MetaMask snap.</p>
				</Card>
			);
		}

		if (shouldDisplayReconnectButton(state.installedSnap)) {
			return (
				<Card
					content={{
						title: 'Reconnect',
						button: <ReconnectButton onClick={handleConnectClick} disabled={!state.installedSnap} />
					}}
					disabled={!state.installedSnap}>
					<p style={{ margin: 0 }}>While connected to a local running snap this button will always be displayed in order to update the snap if a change is made.</p>
				</Card>
			);
		}
	};

	return (
		<Container>
			<Heading>MetaMask Snap ID</Heading>
			<Span>{import.meta.env.VITE_SNAP_ID || `npm:@sei-js/metamask-snap`}</Span>
			<CardContainer>
				{renderContainerContent()}
				{renderAccountTests()}
			</CardContainer>
		</Container>
	);
};

export default Index;
