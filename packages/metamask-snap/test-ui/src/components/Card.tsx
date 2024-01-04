import React, { ReactNode } from 'react';
import styled from 'styled-components';

type CardProps = {
	content: {
		title?: string;
		description?: ReactNode;
		button?: ReactNode;
	};
	isLoading?: boolean;
	disabled?: boolean;
	children: ReactNode;
};

const CardWrapper = styled.div<{ disabled: boolean }>`
	display: flex;
	flex-direction: column;
	width: ${({}) => '100%'};
	background-color: ${({ theme }) => theme.colors.card.default};
	margin-top: 2.4rem;
	margin-bottom: 2.4rem;
	padding: 2.4rem;
	max-width: 64.8rem;
	border: 1px solid ${({ theme }) => theme.colors.border.default};
	border-radius: ${({ theme }) => theme.radii.default};
	gap: 2rem;
	box-shadow: ${({ theme }) => theme.shadows.default};
	filter: opacity(${({ disabled }) => (disabled ? '.4' : '1')});
	${({ theme }) => theme.mediaQueries.small} {
		width: 100%;
		margin-top: 1.2rem;
		margin-bottom: 1.2rem;
		padding: 1.6rem;
	}
`;

const Title = styled.h2`
	font-size: ${({ theme }) => theme.fontSizes.large};
	margin: 0;
	${({ theme }) => theme.mediaQueries.small} {
		font-size: ${({ theme }) => theme.fontSizes.text};
	}
`;

const Children = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0;
	gap: 1rem;
`;

const Loading = styled.button`
	background-color: transparent;
	color: ${({ theme }) => theme.colors.text.default};
`;

export const Card = ({ content, disabled = false, children, isLoading }: CardProps) => {
	const { title, button } = content;
	return (
		<CardWrapper disabled={disabled}>
			{title && <Title>{title}</Title>}
			<Children>{children}</Children>
			{isLoading ? <Loading>...</Loading> : button}
		</CardWrapper>
	);
};
