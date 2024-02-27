import styled, { keyframes } from 'styled-components';
import { AiFillCloseCircle } from '@react-icons/all-files/ai/AiFillCloseCircle';
import { BiErrorAlt } from '@react-icons/all-files/bi/BiErrorAlt';
import { FaCheckCircle } from '@react-icons/all-files/fa/FaCheckCircle';
import { AiFillLeftCircle } from '@react-icons/all-files/ai/AiFillLeftCircle';
import { addOpacityToColor } from '../../utils/colors';

export const walletFadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const ModalBackground = styled.div`
	display: flex;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	backdrop-filter: blur(3px);
	background-color: ${(props) => addOpacityToColor(props.theme.primaryColor || '#f1f1f1', 0.24)};
	z-index: 2;
	padding: 2rem;

	& > * {
		display: flex;
		flex-direction: row;
		margin: 0;
		box-sizing: border-box;
	}
`;

export const ModalCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.backgroundColor || '#F1F1F1'};
	border-radius: 1rem;
	z-index: 10;
	padding: 2rem;
	max-height: 100%;
	width: 100%;
	max-width: 720px;
	min-height: 440px;
	box-shadow: rgba(14, 15, 16, 0.1) 3px 9px 24px;
	overflow-x: hidden;
	gap: 2rem;

	@media (max-width: 480px) {
		flex-direction: column;
		gap: 2rem;
		min-height: 224px;
	}
`;

export const CardHeader = styled.div`
	display: flex;
	min-height: 2rem;
	width: 100%;
	justify-content: space-between;
`;

export const CardHeaderTitle = styled.h2`
	color: ${(props) => props.theme.primaryColor || '#121212'};
	margin: 0;
`;

export const CardHeaderClose = styled(AiFillCloseCircle)`
	transition: 70ms all ease-out;
	color: ${(props) => props.theme.primaryColor || '#121212'};
	width: 2rem;
	height: 2rem;
	cursor: pointer;

	&:hover {
		transform: scale(1.2);
	}

	&:active {
		opacity: 0.75;
	}
`;

export const CardContent = styled.div`
	display: flex;
	flex-direction: row;
	flex: 1;
	gap: 2rem;
	width: 100%;
	margin: 0;
`;

export const CardContentWallets = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 280px;
	max-width: 280px;
	min-width: 280px;
	height: fit-content;
`;

export const CardContentSeparator = styled.div`
	display: flex;
	height: 100%;
	width: 2px;
	border-radius: 2px;
	background-color: ${(props) => addOpacityToColor(props.theme.primaryColor || '#121212', 0.16)};

	@media (max-width: 480px) {
		display: none;
	}
`;

export const CardRight = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: center;
	width: 100%;
	padding: 0;

	@media (max-width: 480px) {
		padding: 0;
		justify-content: flex-start;
		margin: 0;
		gap: 1rem;
		flex: 1;
		height: fit-content;
	}
`;

export const CardRightCentered = styled.div`
	animation: ${walletFadeIn} 0.15s 0.3s forwards;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 2rem;
	align-items: center;
	width: 100%;
	padding: 0 3rem 0 2rem;
	opacity: 0;

	@media (max-width: 480px) {
		margin: 2rem 0;
		display: none;
	}
`;

export const CardRightItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3px;
	max-width: 300px;
`;

export const CardContentMobileHelper = styled.div`
	display: none;

	@media (max-width: 480px) {
		display: flex;
	}
`;

export const CardRightItemTitle = styled.p`
	color: ${(props) => props.theme.primaryColor || '#121212'};
	font-weight: 600;
	margin: 0;
`;

export const CardRightItemDescription = styled.p`
	color: ${(props) => props.theme.secondaryColor || '#8C8C8C'};
	margin: 0;
`;

export const CardRightIcon = styled(AiFillLeftCircle)`
	display: none;

	@media (max-width: 480px) {
		display: unset;
		width: 2rem;
		height: 2rem;
	}
`;

export const CardRightError = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;

	@media (max-width: 480px) {
		margin-bottom: 1rem;
	}
`;

export const CardRightErrorIcon = styled(BiErrorAlt)`
	align-items: center;
	justify-content: center;
	color: ${(props) => props.theme.primaryColor || '#121212'};
	width: 72px;
	height: 72px;
`;

export const CardRightErrorDescription = styled.p`
	color: ${(props) => props.theme.secondaryColor || '#8C8C8C'};
	text-align: center;
	margin: 0;
`;

export const CardRightTitle = styled.p`
	color: ${(props) => props.theme.primaryColor || '#121212'};
	text-align: center;
	font-weight: 600;
	font-size: 1.25rem;
	margin: 0;
	width: 100%;
	gap: 1rem;

	@media (max-width: 480px) {
		font-size: 1.15rem;
		width: 100%;
	}
`;

export const CardRightDownload = styled.a`
	padding: 0.5rem 1rem;
	border-radius: 30px;
	background-color: ${(props) => props.theme.primaryColor || '#121212'};
	color: ${(props) => props.theme.backgroundColor || '#F1F1F1'};
	font-weight: 700;
	transition: 50ms all ease-out;

	&:hover {
		opacity: 0.8;
	}

	&:active {
		opacity: 1;
	}
`;

export const CardRightConnectingIcon = styled.img`
	width: 48px;
	height: 48px;
	max-width: 48px;
	max-height: 48px;
	min-width: 48px;
	min-height: 48px;
	border-radius: 1rem;
`;

export const WalletItem = styled.div`
	display: flex;
	padding: 0.25rem 0.5rem;
	justify-content: space-between;
	align-items: center;
	border-radius: 0.5rem;
	border: transparent solid 2px;
	transition: 50ms all ease-out;
	user-select: none;

	&:hover {
		background-color: ${(props) => addOpacityToColor(props.theme.primaryColor || '#121212', 0.08)};
		cursor: pointer;
	}

	&:active {
		opacity: 0.75;
	}
`;

export const WalletItemConnected = styled(WalletItem)`
	background-color: ${(props) => addOpacityToColor(props.theme.primaryColor || '#121212', 0.08)};
`;

export const WalletItemTargeted = styled(WalletItem)`
	border: ${(props) => addOpacityToColor(props.theme.primaryColor || '#121212', 0.24)} solid 2px !important;
`;

export const WalletItemInfo = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 1rem;
	padding: 0.5rem;
`;

export const WalletItemInfoName = styled.p`
	color: ${(props) => props.theme.primaryColor || '#121212'};
	text-transform: uppercase;
	font-size: 1.25rem;
	margin: 0;
`;

export const WalletItemInfoImage = styled.img`
	color: ${(props) => addOpacityToColor(props.theme.primaryColor || '#121212', 0.32)};
	border-radius: 50%;
	width: 2rem;
	height: 2rem;
`;

export const WalletItemInfoIcon = styled(FaCheckCircle)`
	color: ${(props) => addOpacityToColor(props.theme.primaryColor || '#121212', 0.32)};
	border-radius: 50%;
	width: 1.25rem;
	height: 1.25rem;
`;

export const CardRightHeader = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;

	@media (max-width: 480px) {
		flex-direction: row;
		align-items: center;
		width: 100%;
		gap: 1rem;
		margin-bottom: 1rem;
	}
`;
