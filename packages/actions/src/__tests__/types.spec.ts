import { GetSeiActionResponse } from '../types';

describe('GetSeiActionResponse', () => {
	it('should create a valid GetSeiActionResponse object', () => {
		const response: GetSeiActionResponse = {
			icon: 'https://example.com/icon.png',
			label: 'Test Label',
			title: 'Test Title',
			description: 'Test Description',
			links: {
				actions: [
					{
						label: 'Test Action',
						href: '/api/test-action',
						chainType: 'EVM',
						parameters: [
							{
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
		expect(response.links.actions[0].chainType).toBe('EVM');
	});
});
