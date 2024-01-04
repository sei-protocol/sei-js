import React, { useContext } from 'react';
import styled, { useTheme } from 'styled-components';
import { MetamaskActions, MetaMaskContext } from '../hooks';
import { connectSnap, getThemePreference, getSnap } from '../utils';
import { HeaderButtons } from './Buttons';
import { Toggle } from './Toggle';

const HeaderWrapper = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 2.4rem;
	border-bottom: 1px solid ${(props) => props.theme.colors.border.default};
`;

const Title = styled.p`
	font-size: ${(props) => props.theme.fontSizes.title};
	font-weight: bold;
	margin: 0;
	${({ theme }) => theme.mediaQueries.small} {
		display: none;
	}
`;

const LogoWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const RightContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const Header = ({ handleToggleClick }: { handleToggleClick(): void }) => {
	const theme = useTheme();
	const [state, dispatch] = useContext(MetaMaskContext);

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
	return (
		<HeaderWrapper>
			<LogoWrapper>
				<Title>Sei MetaMask Snap Test UI</Title>
			</LogoWrapper>
			<RightContainer>
				<Toggle onToggle={handleToggleClick} defaultChecked={getThemePreference()} />
				<HeaderButtons state={state} onConnectClick={handleConnectClick} />
			</RightContainer>
		</HeaderWrapper>
	);
};
