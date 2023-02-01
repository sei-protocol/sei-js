import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryEpochProvisionsRequest, QueryEpochProvisionsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    epochProvisions(_params?: QueryEpochProvisionsRequest): Promise<QueryEpochProvisionsResponseSDKType>;
}
