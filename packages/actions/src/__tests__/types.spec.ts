import { GetSeiActionResponse } from '../types';

describe('GetSeiActionResponse', () => {
	it('should create a valid GetSeiActionResponse object', () => {
		const response: GetSeiActionResponse = {
			icon: 'https://example.com/icon.png',
			label: 'Test Label',
			title: 'Test Title',
			description: 'Test Description',
			transactionType: 'EVM',
			links: {
				actions: [
					{
						label: 'Test Action',
						href: '/api/test-action',
						parameters: [
							{
								type: 'text',
								name: 'param1',
								label: 'Param 1',
								required: true
							}
						]
					}
				]
			}
		};

		expect(response).toHaveProperty('icon', 'https://example.com/icon.png');
		expect(response.links.transactionType).toBe('EVM');
	});
});
