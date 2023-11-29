import styled from 'styled-components';
import { IoWalletOutline } from '@react-icons/all-files/io5/IoWalletOutline';
import { IoLogOutOutline } from '@react-icons/all-files/io5/IoLogOutOutline';
import { IoCopyOutline } from '@react-icons/all-files/io5/IoCopyOutline';
import { addOpacityToColor } from '../../utils/colors';

export const ConnectWrapper = styled.div`
	position: relative;
`;

export const WalletMenu = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	top: 46px;
	right: 0;
	padding: 12px;
	gap: 12px;
	background-color: ${(props) => props.theme.backgroundColor || '#F1F1F1'};
	border-radius: 4px;
	border: #2c2c2c22 solid 1px;
`;

export const WalletMenuItem = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
	font-weight: 500;
	font-size: 1.15rem;
	white-space: nowrap;
	color: ${(props) => props.theme.primaryColor || '#121212'};
	cursor: pointer;
	border-radius: 6px;
	padding: 9px;

	&:hover {
		background-color: ${(props) => addOpacityToColor(props.theme.primaryColor || '#121212', 0.32)};
	}
`;

export const WalletMenuItemChange = styled(IoWalletOutline)`
	width: 20px;
	height: 20px;
	color: ${(props) => props.theme.primaryColor || '#121212'};
	fill: ${(props) => props.theme.primaryColor || '#121212'};
	stroke: ${(props) => props.theme.primaryColor || '#121212'};
`;

export const WalletMenuItemCopy = styled(IoCopyOutline)`
	width: 20px;
	height: 20px;
	color: ${(props) => props.theme.primaryColor || '#121212'};
	fill: ${(props) => props.theme.primaryColor || '#121212'};
	stroke: ${(props) => props.theme.primaryColor || '#121212'};
`;

export const WalletMenuItemLogOut = styled(IoLogOutOutline)`
	width: 20px;
	height: 20px;
	color: ${(props) => props.theme.primaryColor || '#121212'};
	fill: ${(props) => props.theme.primaryColor || '#121212'};
	stroke: ${(props) => props.theme.primaryColor || '#121212'};
`;
