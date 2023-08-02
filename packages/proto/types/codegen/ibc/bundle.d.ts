import * as _56 from "./applications/transfer/v1/genesis";
import * as _57 from "./applications/transfer/v1/query";
import * as _58 from "./applications/transfer/v1/transfer";
import * as _59 from "./applications/transfer/v1/tx";
import * as _60 from "./applications/transfer/v2/packet";
import * as _61 from "./core/channel/v1/channel";
import * as _62 from "./core/channel/v1/genesis";
import * as _63 from "./core/channel/v1/query";
import * as _64 from "./core/channel/v1/tx";
import * as _65 from "./core/client/v1/client";
import * as _66 from "./core/client/v1/genesis";
import * as _67 from "./core/client/v1/query";
import * as _68 from "./core/client/v1/tx";
import * as _69 from "./core/commitment/v1/commitment";
import * as _70 from "./core/connection/v1/connection";
import * as _71 from "./core/connection/v1/genesis";
import * as _72 from "./core/connection/v1/query";
import * as _73 from "./core/connection/v1/tx";
import * as _74 from "./lightclients/localhost/v1/localhost";
import * as _75 from "./lightclients/solomachine/v1/solomachine";
import * as _76 from "./lightclients/solomachine/v2/solomachine";
import * as _77 from "./lightclients/tendermint/v1/tendermint";
import * as _173 from "./applications/transfer/v1/query.lcd";
import * as _174 from "./core/channel/v1/query.lcd";
import * as _175 from "./core/client/v1/query.lcd";
import * as _176 from "./core/connection/v1/query.lcd";
import * as _177 from "./applications/transfer/v1/query.rpc.Query";
import * as _178 from "./core/channel/v1/query.rpc.Query";
import * as _179 from "./core/client/v1/query.rpc.Query";
import * as _180 from "./core/connection/v1/query.rpc.Query";
import * as _181 from "./applications/transfer/v1/tx.rpc.msg";
import * as _182 from "./core/channel/v1/tx.rpc.msg";
import * as _183 from "./core/client/v1/tx.rpc.msg";
import * as _184 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _181.MsgClientImpl;
                QueryClientImpl: typeof _177.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _57.QueryDenomTraceRequest): Promise<_57.QueryDenomTraceResponse>;
                    denomTraces(request?: _57.QueryDenomTracesRequest): Promise<_57.QueryDenomTracesResponse>;
                    params(request?: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
                };
                LCDQueryClient: typeof _173.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _59.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _59.MsgTransfer): {
                            typeUrl: string;
                            value: _59.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _59.MsgTransfer): {
                            typeUrl: string;
                            value: _59.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: _59.MsgTransfer) => {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("../helpers").AminoHeight;
                            timeout_timestamp: string;
                        };
                        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp }: {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("../helpers").AminoHeight;
                            timeout_timestamp: string;
                        }) => _59.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _59.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgTransfer;
                    fromPartial(object: any): _59.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _59.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgTransferResponse;
                    fromPartial(_: any): _59.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _58.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.DenomTrace;
                    fromPartial(object: any): _58.DenomTrace;
                };
                Params: {
                    encode(message: _58.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Params;
                    fromPartial(object: any): _58.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _57.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDenomTraceRequest;
                    fromPartial(object: any): _57.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _57.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDenomTraceResponse;
                    fromPartial(object: any): _57.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _57.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDenomTracesRequest;
                    fromPartial(object: any): _57.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _57.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDenomTracesResponse;
                    fromPartial(object: any): _57.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _57.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryParamsRequest;
                    fromPartial(_: any): _57.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _57.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryParamsResponse;
                    fromPartial(object: any): _57.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _56.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.GenesisState;
                    fromPartial(object: any): _56.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _60.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.FungibleTokenPacketData;
                    fromPartial(object: any): _60.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _182.MsgClientImpl;
                QueryClientImpl: typeof _178.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _63.QueryChannelRequest): Promise<_63.QueryChannelResponse>;
                    channels(request?: _63.QueryChannelsRequest): Promise<_63.QueryChannelsResponse>;
                    connectionChannels(request: _63.QueryConnectionChannelsRequest): Promise<_63.QueryConnectionChannelsResponse>;
                    channelClientState(request: _63.QueryChannelClientStateRequest): Promise<_63.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _63.QueryChannelConsensusStateRequest): Promise<_63.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _63.QueryPacketCommitmentRequest): Promise<_63.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _63.QueryPacketCommitmentsRequest): Promise<_63.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _63.QueryPacketReceiptRequest): Promise<_63.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _63.QueryPacketAcknowledgementRequest): Promise<_63.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _63.QueryPacketAcknowledgementsRequest): Promise<_63.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _63.QueryUnreceivedPacketsRequest): Promise<_63.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _63.QueryUnreceivedAcksRequest): Promise<_63.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _63.QueryNextSequenceReceiveRequest): Promise<_63.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _174.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _64.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _64.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _64.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _64.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _64.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _64.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _64.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _64.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _64.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _64.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _64.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _64.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _64.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _64.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _64.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _64.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _64.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _64.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _64.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _64.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _64.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _64.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _64.MsgRecvPacket): {
                            typeUrl: string;
                            value: _64.MsgRecvPacket;
                        };
                        timeout(value: _64.MsgTimeout): {
                            typeUrl: string;
                            value: _64.MsgTimeout;
                        };
                        timeoutOnClose(value: _64.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _64.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _64.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _64.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _64.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _64.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _64.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _64.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _64.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _64.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _64.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _64.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _64.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _64.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _64.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _64.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _64.MsgRecvPacket): {
                            typeUrl: string;
                            value: _64.MsgRecvPacket;
                        };
                        timeout(value: _64.MsgTimeout): {
                            typeUrl: string;
                            value: _64.MsgTimeout;
                        };
                        timeoutOnClose(value: _64.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _64.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _64.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _64.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ portId, channel, signer }: _64.MsgChannelOpenInit) => {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel, signer }: {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        }) => _64.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _64.MsgChannelOpenTry) => {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, previous_channel_id, channel, counterparty_version, proof_init, proof_height, signer }: {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _64.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _64.MsgChannelOpenAck) => {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, counterparty_channel_id, counterparty_version, proof_try, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _64.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _64.MsgChannelOpenConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_ack, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _64.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _64.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _64.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _64.MsgChannelCloseConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_init, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _64.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _64.MsgRecvPacket) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_commitment, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _64.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _64.MsgTimeout) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _64.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _64.MsgTimeoutOnClose) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_close, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _64.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _64.MsgAcknowledgement) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, acknowledgement, proof_acked, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _64.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    encode(message: _64.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgChannelOpenInit;
                    fromPartial(object: any): _64.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _64.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgChannelOpenInitResponse;
                    fromPartial(_: any): _64.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _64.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgChannelOpenTry;
                    fromPartial(object: any): _64.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _64.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgChannelOpenTryResponse;
                    fromPartial(_: any): _64.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _64.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgChannelOpenAck;
                    fromPartial(object: any): _64.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _64.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgChannelOpenAckResponse;
                    fromPartial(_: any): _64.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _64.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgChannelOpenConfirm;
                    fromPartial(object: any): _64.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _64.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgChannelOpenConfirmResponse;
                    fromPartial(_: any): _64.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _64.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgChannelCloseInit;
                    fromPartial(object: any): _64.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _64.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgChannelCloseInitResponse;
                    fromPartial(_: any): _64.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _64.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgChannelCloseConfirm;
                    fromPartial(object: any): _64.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _64.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgChannelCloseConfirmResponse;
                    fromPartial(_: any): _64.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _64.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgRecvPacket;
                    fromPartial(object: any): _64.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _64.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgRecvPacketResponse;
                    fromPartial(_: any): _64.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _64.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgTimeout;
                    fromPartial(object: any): _64.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _64.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgTimeoutResponse;
                    fromPartial(_: any): _64.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _64.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgTimeoutOnClose;
                    fromPartial(object: any): _64.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _64.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgTimeoutOnCloseResponse;
                    fromPartial(_: any): _64.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _64.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgAcknowledgement;
                    fromPartial(object: any): _64.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _64.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgAcknowledgementResponse;
                    fromPartial(_: any): _64.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _63.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryChannelRequest;
                    fromPartial(object: any): _63.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _63.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryChannelResponse;
                    fromPartial(object: any): _63.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _63.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryChannelsRequest;
                    fromPartial(object: any): _63.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _63.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryChannelsResponse;
                    fromPartial(object: any): _63.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _63.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryConnectionChannelsRequest;
                    fromPartial(object: any): _63.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _63.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryConnectionChannelsResponse;
                    fromPartial(object: any): _63.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _63.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryChannelClientStateRequest;
                    fromPartial(object: any): _63.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _63.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryChannelClientStateResponse;
                    fromPartial(object: any): _63.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _63.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryChannelConsensusStateRequest;
                    fromPartial(object: any): _63.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _63.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryChannelConsensusStateResponse;
                    fromPartial(object: any): _63.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _63.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryPacketCommitmentRequest;
                    fromPartial(object: any): _63.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _63.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryPacketCommitmentResponse;
                    fromPartial(object: any): _63.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _63.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryPacketCommitmentsRequest;
                    fromPartial(object: any): _63.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _63.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryPacketCommitmentsResponse;
                    fromPartial(object: any): _63.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _63.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryPacketReceiptRequest;
                    fromPartial(object: any): _63.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _63.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryPacketReceiptResponse;
                    fromPartial(object: any): _63.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _63.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryPacketAcknowledgementRequest;
                    fromPartial(object: any): _63.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _63.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryPacketAcknowledgementResponse;
                    fromPartial(object: any): _63.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _63.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: any): _63.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _63.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: any): _63.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _63.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryUnreceivedPacketsRequest;
                    fromPartial(object: any): _63.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _63.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryUnreceivedPacketsResponse;
                    fromPartial(object: any): _63.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _63.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryUnreceivedAcksRequest;
                    fromPartial(object: any): _63.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _63.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryUnreceivedAcksResponse;
                    fromPartial(object: any): _63.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _63.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryNextSequenceReceiveRequest;
                    fromPartial(object: any): _63.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _63.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryNextSequenceReceiveResponse;
                    fromPartial(object: any): _63.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _62.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.GenesisState;
                    fromPartial(object: any): _62.GenesisState;
                };
                PacketSequence: {
                    encode(message: _62.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.PacketSequence;
                    fromPartial(object: any): _62.PacketSequence;
                };
                stateFromJSON(object: any): _61.State;
                stateToJSON(object: _61.State): string;
                orderFromJSON(object: any): _61.Order;
                orderToJSON(object: _61.Order): string;
                State: typeof _61.State;
                StateSDKType: typeof _61.State;
                Order: typeof _61.Order;
                OrderSDKType: typeof _61.Order;
                Channel: {
                    encode(message: _61.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.Channel;
                    fromPartial(object: any): _61.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _61.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.IdentifiedChannel;
                    fromPartial(object: any): _61.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _61.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.Counterparty;
                    fromPartial(object: any): _61.Counterparty;
                };
                Packet: {
                    encode(message: _61.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.Packet;
                    fromPartial(object: any): _61.Packet;
                };
                PacketState: {
                    encode(message: _61.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.PacketState;
                    fromPartial(object: any): _61.PacketState;
                };
                Acknowledgement: {
                    encode(message: _61.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.Acknowledgement;
                    fromPartial(object: any): _61.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _183.MsgClientImpl;
                QueryClientImpl: typeof _179.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _67.QueryClientStateRequest): Promise<_67.QueryClientStateResponse>;
                    clientStates(request?: _67.QueryClientStatesRequest): Promise<_67.QueryClientStatesResponse>;
                    consensusState(request: _67.QueryConsensusStateRequest): Promise<_67.QueryConsensusStateResponse>;
                    consensusStates(request: _67.QueryConsensusStatesRequest): Promise<_67.QueryConsensusStatesResponse>;
                    clientStatus(request: _67.QueryClientStatusRequest): Promise<_67.QueryClientStatusResponse>;
                    clientParams(request?: _67.QueryClientParamsRequest): Promise<_67.QueryClientParamsResponse>;
                    upgradedClientState(request?: _67.QueryUpgradedClientStateRequest): Promise<_67.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _67.QueryUpgradedConsensusStateRequest): Promise<_67.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _175.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _68.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _68.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _68.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _68.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _68.MsgCreateClient): {
                            typeUrl: string;
                            value: _68.MsgCreateClient;
                        };
                        updateClient(value: _68.MsgUpdateClient): {
                            typeUrl: string;
                            value: _68.MsgUpdateClient;
                        };
                        upgradeClient(value: _68.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _68.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _68.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _68.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _68.MsgCreateClient): {
                            typeUrl: string;
                            value: _68.MsgCreateClient;
                        };
                        updateClient(value: _68.MsgUpdateClient): {
                            typeUrl: string;
                            value: _68.MsgUpdateClient;
                        };
                        upgradeClient(value: _68.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _68.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _68.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _68.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ clientState, consensusState, signer }: _68.MsgCreateClient) => {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_state, consensus_state, signer }: {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _68.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _68.MsgUpdateClient) => {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, header, signer }: {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _68.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _68.MsgUpgradeClient) => {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        };
                        fromAmino: ({ client_id, client_state, consensus_state, proof_upgrade_client, proof_upgrade_consensus_state, signer }: {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        }) => _68.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _68.MsgSubmitMisbehaviour) => {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, misbehaviour, signer }: {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _68.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _68.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgCreateClient;
                    fromPartial(object: any): _68.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _68.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgCreateClientResponse;
                    fromPartial(_: any): _68.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _68.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgUpdateClient;
                    fromPartial(object: any): _68.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _68.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgUpdateClientResponse;
                    fromPartial(_: any): _68.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _68.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgUpgradeClient;
                    fromPartial(object: any): _68.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _68.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgUpgradeClientResponse;
                    fromPartial(_: any): _68.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _68.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgSubmitMisbehaviour;
                    fromPartial(object: any): _68.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _68.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: any): _68.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _67.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryClientStateRequest;
                    fromPartial(object: any): _67.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _67.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryClientStateResponse;
                    fromPartial(object: any): _67.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _67.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryClientStatesRequest;
                    fromPartial(object: any): _67.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _67.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryClientStatesResponse;
                    fromPartial(object: any): _67.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _67.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryConsensusStateRequest;
                    fromPartial(object: any): _67.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _67.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryConsensusStateResponse;
                    fromPartial(object: any): _67.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _67.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryConsensusStatesRequest;
                    fromPartial(object: any): _67.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _67.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryConsensusStatesResponse;
                    fromPartial(object: any): _67.QueryConsensusStatesResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _67.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryClientStatusRequest;
                    fromPartial(object: any): _67.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _67.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryClientStatusResponse;
                    fromPartial(object: any): _67.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _67.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryClientParamsRequest;
                    fromPartial(_: any): _67.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _67.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryClientParamsResponse;
                    fromPartial(object: any): _67.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _67.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryUpgradedClientStateRequest;
                    fromPartial(_: any): _67.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _67.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryUpgradedClientStateResponse;
                    fromPartial(object: any): _67.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _67.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: any): _67.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _67.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: any): _67.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _66.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.GenesisState;
                    fromPartial(object: any): _66.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _66.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.GenesisMetadata;
                    fromPartial(object: any): _66.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _66.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.IdentifiedGenesisMetadata;
                    fromPartial(object: any): _66.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _65.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.IdentifiedClientState;
                    fromPartial(object: any): _65.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _65.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.ConsensusStateWithHeight;
                    fromPartial(object: any): _65.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _65.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.ClientConsensusStates;
                    fromPartial(object: any): _65.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _65.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.ClientUpdateProposal;
                    fromPartial(object: any): _65.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _65.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.UpgradeProposal;
                    fromPartial(object: any): _65.UpgradeProposal;
                };
                Height: {
                    encode(message: _65.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Height;
                    fromPartial(object: any): _65.Height;
                };
                Params: {
                    encode(message: _65.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Params;
                    fromPartial(object: any): _65.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _69.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MerkleRoot;
                    fromPartial(object: any): _69.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _69.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MerklePrefix;
                    fromPartial(object: any): _69.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _69.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MerklePath;
                    fromPartial(object: any): _69.MerklePath;
                };
                MerkleProof: {
                    encode(message: _69.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MerkleProof;
                    fromPartial(object: any): _69.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _184.MsgClientImpl;
                QueryClientImpl: typeof _180.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _72.QueryConnectionRequest): Promise<_72.QueryConnectionResponse>;
                    connections(request?: _72.QueryConnectionsRequest): Promise<_72.QueryConnectionsResponse>;
                    clientConnections(request: _72.QueryClientConnectionsRequest): Promise<_72.QueryClientConnectionsResponse>;
                    connectionClientState(request: _72.QueryConnectionClientStateRequest): Promise<_72.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _72.QueryConnectionConsensusStateRequest): Promise<_72.QueryConnectionConsensusStateResponse>;
                };
                LCDQueryClient: typeof _176.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _73.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _73.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _73.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _73.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _73.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _73.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _73.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _73.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _73.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _73.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _73.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _73.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _73.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _73.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _73.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _73.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _73.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _73.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _73.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _73.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _73.MsgConnectionOpenInit) => {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        };
                        fromAmino: ({ client_id, counterparty, version, delay_period, signer }: {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        }) => _73.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _73.MsgConnectionOpenTry) => {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("../helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ client_id, previous_connection_id, client_state, counterparty, delay_period, counterparty_versions, proof_height, proof_init, proof_client, proof_consensus, consensus_height, signer }: {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("../helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _73.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _73.MsgConnectionOpenAck) => {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("../helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, counterparty_connection_id, version, client_state, proof_height, proof_try, proof_client, proof_consensus, consensus_height, signer }: {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("../helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _73.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _73.MsgConnectionOpenConfirm) => {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, proof_ack, proof_height, signer }: {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _73.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _73.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgConnectionOpenInit;
                    fromPartial(object: any): _73.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _73.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgConnectionOpenInitResponse;
                    fromPartial(_: any): _73.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _73.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgConnectionOpenTry;
                    fromPartial(object: any): _73.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _73.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgConnectionOpenTryResponse;
                    fromPartial(_: any): _73.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _73.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgConnectionOpenAck;
                    fromPartial(object: any): _73.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _73.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgConnectionOpenAckResponse;
                    fromPartial(_: any): _73.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _73.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgConnectionOpenConfirm;
                    fromPartial(object: any): _73.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _73.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: any): _73.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _72.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryConnectionRequest;
                    fromPartial(object: any): _72.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _72.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryConnectionResponse;
                    fromPartial(object: any): _72.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _72.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryConnectionsRequest;
                    fromPartial(object: any): _72.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _72.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryConnectionsResponse;
                    fromPartial(object: any): _72.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _72.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryClientConnectionsRequest;
                    fromPartial(object: any): _72.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _72.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryClientConnectionsResponse;
                    fromPartial(object: any): _72.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _72.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryConnectionClientStateRequest;
                    fromPartial(object: any): _72.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _72.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryConnectionClientStateResponse;
                    fromPartial(object: any): _72.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _72.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryConnectionConsensusStateRequest;
                    fromPartial(object: any): _72.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _72.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryConnectionConsensusStateResponse;
                    fromPartial(object: any): _72.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _71.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.GenesisState;
                    fromPartial(object: any): _71.GenesisState;
                };
                stateFromJSON(object: any): _70.State;
                stateToJSON(object: _70.State): string;
                State: typeof _70.State;
                StateSDKType: typeof _70.State;
                ConnectionEnd: {
                    encode(message: _70.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.ConnectionEnd;
                    fromPartial(object: any): _70.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _70.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.IdentifiedConnection;
                    fromPartial(object: any): _70.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _70.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Counterparty;
                    fromPartial(object: any): _70.Counterparty;
                };
                ClientPaths: {
                    encode(message: _70.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.ClientPaths;
                    fromPartial(object: any): _70.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _70.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.ConnectionPaths;
                    fromPartial(object: any): _70.ConnectionPaths;
                };
                Version: {
                    encode(message: _70.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Version;
                    fromPartial(object: any): _70.Version;
                };
                Params: {
                    encode(message: _70.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Params;
                    fromPartial(object: any): _70.Params;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _74.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.ClientState;
                    fromPartial(object: any): _74.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _75.DataType;
                dataTypeToJSON(object: _75.DataType): string;
                DataType: typeof _75.DataType;
                DataTypeSDKType: typeof _75.DataType;
                ClientState: {
                    encode(message: _75.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.ClientState;
                    fromPartial(object: any): _75.ClientState;
                };
                ConsensusState: {
                    encode(message: _75.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.ConsensusState;
                    fromPartial(object: any): _75.ConsensusState;
                };
                Header: {
                    encode(message: _75.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Header;
                    fromPartial(object: any): _75.Header;
                };
                Misbehaviour: {
                    encode(message: _75.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Misbehaviour;
                    fromPartial(object: any): _75.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _75.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.SignatureAndData;
                    fromPartial(object: any): _75.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _75.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.TimestampedSignatureData;
                    fromPartial(object: any): _75.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _75.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.SignBytes;
                    fromPartial(object: any): _75.SignBytes;
                };
                HeaderData: {
                    encode(message: _75.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.HeaderData;
                    fromPartial(object: any): _75.HeaderData;
                };
                ClientStateData: {
                    encode(message: _75.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.ClientStateData;
                    fromPartial(object: any): _75.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _75.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.ConsensusStateData;
                    fromPartial(object: any): _75.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _75.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.ConnectionStateData;
                    fromPartial(object: any): _75.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _75.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.ChannelStateData;
                    fromPartial(object: any): _75.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _75.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.PacketCommitmentData;
                    fromPartial(object: any): _75.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _75.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.PacketAcknowledgementData;
                    fromPartial(object: any): _75.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _75.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.PacketReceiptAbsenceData;
                    fromPartial(object: any): _75.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _75.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.NextSequenceRecvData;
                    fromPartial(object: any): _75.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _76.DataType;
                dataTypeToJSON(object: _76.DataType): string;
                DataType: typeof _76.DataType;
                DataTypeSDKType: typeof _76.DataType;
                ClientState: {
                    encode(message: _76.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ClientState;
                    fromPartial(object: any): _76.ClientState;
                };
                ConsensusState: {
                    encode(message: _76.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ConsensusState;
                    fromPartial(object: any): _76.ConsensusState;
                };
                Header: {
                    encode(message: _76.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.Header;
                    fromPartial(object: any): _76.Header;
                };
                Misbehaviour: {
                    encode(message: _76.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.Misbehaviour;
                    fromPartial(object: any): _76.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _76.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.SignatureAndData;
                    fromPartial(object: any): _76.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _76.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.TimestampedSignatureData;
                    fromPartial(object: any): _76.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _76.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.SignBytes;
                    fromPartial(object: any): _76.SignBytes;
                };
                HeaderData: {
                    encode(message: _76.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.HeaderData;
                    fromPartial(object: any): _76.HeaderData;
                };
                ClientStateData: {
                    encode(message: _76.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ClientStateData;
                    fromPartial(object: any): _76.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _76.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ConsensusStateData;
                    fromPartial(object: any): _76.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _76.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ConnectionStateData;
                    fromPartial(object: any): _76.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _76.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ChannelStateData;
                    fromPartial(object: any): _76.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _76.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.PacketCommitmentData;
                    fromPartial(object: any): _76.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _76.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.PacketAcknowledgementData;
                    fromPartial(object: any): _76.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _76.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.PacketReceiptAbsenceData;
                    fromPartial(object: any): _76.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _76.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.NextSequenceRecvData;
                    fromPartial(object: any): _76.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _77.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.ClientState;
                    fromPartial(object: any): _77.ClientState;
                };
                ConsensusState: {
                    encode(message: _77.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.ConsensusState;
                    fromPartial(object: any): _77.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _77.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Misbehaviour;
                    fromPartial(object: any): _77.Misbehaviour;
                };
                Header: {
                    encode(message: _77.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Header;
                    fromPartial(object: any): _77.Header;
                };
                Fraction: {
                    encode(message: _77.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Fraction;
                    fromPartial(object: any): _77.Fraction;
                };
            };
        }
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: _181.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _182.MsgClientImpl;
                    };
                    client: {
                        v1: _183.MsgClientImpl;
                    };
                    connection: {
                        v1: _184.MsgClientImpl;
                    };
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: {
                            denomTrace(request: _57.QueryDenomTraceRequest): Promise<_57.QueryDenomTraceResponse>;
                            denomTraces(request?: _57.QueryDenomTracesRequest): Promise<_57.QueryDenomTracesResponse>;
                            params(request?: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _63.QueryChannelRequest): Promise<_63.QueryChannelResponse>;
                            channels(request?: _63.QueryChannelsRequest): Promise<_63.QueryChannelsResponse>;
                            connectionChannels(request: _63.QueryConnectionChannelsRequest): Promise<_63.QueryConnectionChannelsResponse>;
                            channelClientState(request: _63.QueryChannelClientStateRequest): Promise<_63.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _63.QueryChannelConsensusStateRequest): Promise<_63.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _63.QueryPacketCommitmentRequest): Promise<_63.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _63.QueryPacketCommitmentsRequest): Promise<_63.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _63.QueryPacketReceiptRequest): Promise<_63.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _63.QueryPacketAcknowledgementRequest): Promise<_63.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _63.QueryPacketAcknowledgementsRequest): Promise<_63.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _63.QueryUnreceivedPacketsRequest): Promise<_63.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _63.QueryUnreceivedAcksRequest): Promise<_63.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _63.QueryNextSequenceReceiveRequest): Promise<_63.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _67.QueryClientStateRequest): Promise<_67.QueryClientStateResponse>;
                            clientStates(request?: _67.QueryClientStatesRequest): Promise<_67.QueryClientStatesResponse>;
                            consensusState(request: _67.QueryConsensusStateRequest): Promise<_67.QueryConsensusStateResponse>;
                            consensusStates(request: _67.QueryConsensusStatesRequest): Promise<_67.QueryConsensusStatesResponse>;
                            clientStatus(request: _67.QueryClientStatusRequest): Promise<_67.QueryClientStatusResponse>;
                            clientParams(request?: _67.QueryClientParamsRequest): Promise<_67.QueryClientParamsResponse>;
                            upgradedClientState(request?: _67.QueryUpgradedClientStateRequest): Promise<_67.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _67.QueryUpgradedConsensusStateRequest): Promise<_67.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _72.QueryConnectionRequest): Promise<_72.QueryConnectionResponse>;
                            connections(request?: _72.QueryConnectionsRequest): Promise<_72.QueryConnectionsResponse>;
                            clientConnections(request: _72.QueryClientConnectionsRequest): Promise<_72.QueryClientConnectionsResponse>;
                            connectionClientState(request: _72.QueryConnectionClientStateRequest): Promise<_72.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _72.QueryConnectionConsensusStateRequest): Promise<_72.QueryConnectionConsensusStateResponse>;
                        };
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: _173.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _174.LCDQueryClient;
                    };
                    client: {
                        v1: _175.LCDQueryClient;
                    };
                    connection: {
                        v1: _176.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
