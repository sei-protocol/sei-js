import { LCDClient } from "@osmonauts/lcd";
import { QueryEpochRequest, QueryEpochResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    epoch(_params?: QueryEpochRequest): Promise<QueryEpochResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
}
