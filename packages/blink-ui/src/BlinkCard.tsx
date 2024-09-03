import { Box, Button, Group, Image, Input, Paper, Radio, Stack, Text, Textarea, ThemeIcon, Title, Select, Checkbox } from '@mantine/core';
import { GetSeiActionResponse, SeiActionConfig, SeiActionParameter, SeiActionParameterSelectable, SeiActionsJSON } from '@sei-js/actions';
import { IconShieldCheckFilled } from '@tabler/icons-react';
import React, { useState, useEffect } from 'react';
import { getMatchingRule, getRootDomain } from './utils';

export const BlinkCard = ({ actionUrl, senderAddress }: { actionUrl: string; senderAddress: string }) => {
	const [blink, setBlink] = useState<GetSeiActionResponse>();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const rootDomain = getRootDomain(actionUrl);
				const response = await fetch(`${rootDomain}/actions.json`);
				const actionsJSON: SeiActionsJSON = await response.json();
				const matchingApiRule = getMatchingRule(actionsJSON, actionUrl);
				if (!matchingApiRule) {
					return;
				}
				const apiResponse = await fetch(`${rootDomain}${matchingApiRule.apiPath}`);
				const actionResponse: GetSeiActionResponse = await apiResponse.json();
				return actionResponse;
			} catch (error) {
				console.error('Error fetching action.json:', error);
				return;
			}
		};

		fetchData().then(setBlink);
	}, [actionUrl]);

	const sendAction = () => {
		console.log('Sending action', senderAddress);
	};

	const domain = new URL(actionUrl).hostname;

	const renderActionButton = (action: SeiActionConfig) => (
		<Button color='indigo' radius='md' fullWidth flex={1} onClick={sendAction}>
			{action.label}
		</Button>
	);

	const renderActionInput = (field: SeiActionParameter, index: number) => {
		switch (field.type) {
			case 'text':
			case 'email':
			case 'url':
			case 'number':
			case 'date':
			case 'datetime-local':
				return <Input key={index} type={field.type} radius='md' flex={2} placeholder={field.label} required={field.required} pattern={field.pattern} />;
			case 'textarea':
				return <Textarea key={index} radius='md' flex={2} placeholder={field.label} required={field.required} />;
			case 'checkbox':
				return <Checkbox key={index} label={field.label} required={field.required} />;
			case 'radio':
				return (
					<Radio.Group key={index} required={field.required}>
						{(field as SeiActionParameterSelectable).options?.map((option, i) => (
							<Radio key={i} value={option.value} label={option.label} />
						))}
					</Radio.Group>
				);
			case 'select':
				return (
					<Select
						key={index}
						radius='md'
						flex={2}
						placeholder={field.label}
						required={field.required}
						data={(field as SeiActionParameterSelectable).options?.map((option) => ({
							value: option.value,
							label: option.label
						}))}
					/>
				);
			default:
				return null;
		}
	};

	const renderActions = () => {
		if (!blink) return null;

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-expect-error
		const multiInputAction = blink.links?.actions.find((a: SeiActionConfig) => a.parameters?.length > 1);
		const actions = multiInputAction ? [multiInputAction] : blink.links?.actions;

		if (!actions) {
			return (
				<Box>
					<Button color='indigo' radius='md' fullWidth flex={1} onClick={() => sendAction()}>
						{blink?.label}
					</Button>
				</Box>
			);
		}

		return actions.map((action) => {
			if (!action.parameters) {
				return <Box key={`action-button-${action.label}`}>{renderActionButton(action)}</Box>;
			} else if (action.parameters.length === 1) {
				return (
					<Group key={action.label} gap='xs'>
						{action.parameters.map(renderActionInput)}
						<Box>{renderActionButton(action)}</Box>
					</Group>
				);
			}

			return (
				<Stack key={action.label} gap='xs'>
					{action.parameters.map(renderActionInput)}
					<Box>{renderActionButton(action)}</Box>
				</Stack>
			);
		});
	};

	if (!blink) {
		return (
			<Paper radius='lg' p='sm' withBorder>
				<Stack gap='sm'>
					<Group gap={6}>
						<Text size='sm' c='gray'>
							{domain}
						</Text>
						<ThemeIcon variant='light' color='gray' size='sm'>
							<IconShieldCheckFilled style={{ width: '90%', height: '90%' }} />
						</ThemeIcon>
					</Group>
					<Box>
						<Title order={2}>Loading...</Title>
						<Text c='gray'>Loading...</Text>
					</Box>
				</Stack>
			</Paper>
		);
	}

	return (
		<Paper radius='lg' p='sm' withBorder>
			<Stack gap='sm'>
				<Box>
					<Image src={blink?.icon} alt={blink?.title} radius='lg' height={350} />
				</Box>
				<Group gap={6}>
					<Text size='sm' c='gray'>
						{domain}
					</Text>
					<ThemeIcon variant='light' color='gray' size='sm'>
						<IconShieldCheckFilled style={{ width: '90%', height: '90%' }} />
					</ThemeIcon>
				</Group>
				<Box>
					<Title order={2}>{blink?.title}</Title>
					<Text c='gray'>{blink?.description}</Text>
				</Box>
				<Stack gap='xs'>{renderActions()}</Stack>
			</Stack>
		</Paper>
	);
};
