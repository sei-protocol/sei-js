import { Rpc } from "@osmonauts/helpers";
import { MsgChannelOpenInit, MsgChannelOpenInitResponse, MsgChannelOpenTry, MsgChannelOpenTryResponse, MsgChannelOpenAck, MsgChannelOpenAckResponse, MsgChannelOpenConfirm, MsgChannelOpenConfirmResponse, MsgChannelCloseInit, MsgChannelCloseInitResponse, MsgChannelCloseConfirm, MsgChannelCloseConfirmResponse, MsgRecvPacket, MsgRecvPacketResponse, MsgTimeout, MsgTimeoutResponse, MsgTimeoutOnClose, MsgTimeoutOnCloseResponse, MsgAcknowledgement, MsgAcknowledgementResponse } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    channelOpenInit(request: MsgChannelOpenInit): Promise<MsgChannelOpenInitResponse>;
    channelOpenTry(request: MsgChannelOpenTry): Promise<MsgChannelOpenTryResponse>;
    channelOpenAck(request: MsgChannelOpenAck): Promise<MsgChannelOpenAckResponse>;
    channelOpenConfirm(request: MsgChannelOpenConfirm): Promise<MsgChannelOpenConfirmResponse>;
    channelCloseInit(request: MsgChannelCloseInit): Promise<MsgChannelCloseInitResponse>;
    channelCloseConfirm(request: MsgChannelCloseConfirm): Promise<MsgChannelCloseConfirmResponse>;
    recvPacket(request: MsgRecvPacket): Promise<MsgRecvPacketResponse>;
    timeout(request: MsgTimeout): Promise<MsgTimeoutResponse>;
    timeoutOnClose(request: MsgTimeoutOnClose): Promise<MsgTimeoutOnCloseResponse>;
    acknowledgement(request: MsgAcknowledgement): Promise<MsgAcknowledgementResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    channelOpenInit(request: MsgChannelOpenInit): Promise<MsgChannelOpenInitResponse>;
    channelOpenTry(request: MsgChannelOpenTry): Promise<MsgChannelOpenTryResponse>;
    channelOpenAck(request: MsgChannelOpenAck): Promise<MsgChannelOpenAckResponse>;
    channelOpenConfirm(request: MsgChannelOpenConfirm): Promise<MsgChannelOpenConfirmResponse>;
    channelCloseInit(request: MsgChannelCloseInit): Promise<MsgChannelCloseInitResponse>;
    channelCloseConfirm(request: MsgChannelCloseConfirm): Promise<MsgChannelCloseConfirmResponse>;
    recvPacket(request: MsgRecvPacket): Promise<MsgRecvPacketResponse>;
    timeout(request: MsgTimeout): Promise<MsgTimeoutResponse>;
    timeoutOnClose(request: MsgTimeoutOnClose): Promise<MsgTimeoutOnCloseResponse>;
    acknowledgement(request: MsgAcknowledgement): Promise<MsgAcknowledgementResponse>;
}
