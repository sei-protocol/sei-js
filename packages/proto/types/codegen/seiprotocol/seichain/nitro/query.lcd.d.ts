import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryRecordedTransactionDataRequest, QueryRecordedTransactionDataResponseSDKType, QueryStateRootRequest, QueryStateRootResponseSDKType, QuerySenderRequest, QuerySenderResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    recordedTransactionData(params: QueryRecordedTransactionDataRequest): Promise<QueryRecordedTransactionDataResponseSDKType>;
    stateRoot(params: QueryStateRootRequest): Promise<QueryStateRootResponseSDKType>;
    sender(params: QuerySenderRequest): Promise<QuerySenderResponseSDKType>;
}
