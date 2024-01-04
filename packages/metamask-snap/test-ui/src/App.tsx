import React from 'react';
import { FunctionComponent, useContext } from 'react';
import styled from 'styled-components';
import { Header } from './components';

import { GlobalStyle } from './config';
import { ToggleThemeContext } from './Root';
import Index from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 100%;
	height: 100%;
	max-height: 100%;
	overflow: auto;
`;

export const App: FunctionComponent = () => {
	const toggleTheme = useContext(ToggleThemeContext);

	return (
		<>
			<GlobalStyle />
			<ToastContainer />
			<Wrapper>
				<Header handleToggleClick={toggleTheme} />
				<Index />
			</Wrapper>
		</>
	);
};
