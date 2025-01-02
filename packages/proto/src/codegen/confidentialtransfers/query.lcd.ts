import { setPaginationParams } from '../helpers';
import { LCDClient } from '@cosmology/lcd';
import { GetCtAccountRequest, GetCtAccountResponseSDKType, GetAllCtAccountsRequest, GetAllCtAccountsResponseSDKType } from './query';
export class LCDQueryClient {
	req: LCDClient;
	constructor({ requestClient }: { requestClient: LCDClient }) {
		this.req = requestClient;
		this.getCtAccount = this.getCtAccount.bind(this);
		this.getAllCtAccounts = this.getAllCtAccounts.bind(this);
	}
	/* GetCtAccount */
	async getCtAccount(params: GetCtAccountRequest): Promise<GetCtAccountResponseSDKType> {
		const options: any = {
			params: {}
		};
		if (typeof params?.denom !== 'undefined') {
			options.params.denom = params.denom;
		}
		const endpoint = `seichain/confidentialtransfers/account/${params.address}/denom`;
		return await this.req.get<GetCtAccountResponseSDKType>(endpoint, options);
	}
	/* GetAllCtAccounts */
	async getAllCtAccounts(params: GetAllCtAccountsRequest): Promise<GetAllCtAccountsResponseSDKType> {
		const options: any = {
			params: {}
		};
		if (typeof params?.pagination !== 'undefined') {
			setPaginationParams(options, params.pagination);
		}
		const endpoint = `seichain/confidentialtransfers/account/${params.address}`;
		return await this.req.get<GetAllCtAccountsResponseSDKType>(endpoint, options);
	}
}
