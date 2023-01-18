import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryChannelRequest, QueryChannelResponse, QueryChannelsRequest, QueryChannelsResponse, QueryConnectionChannelsRequest, QueryConnectionChannelsResponse, QueryChannelClientStateRequest, QueryChannelClientStateResponse, QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse, QueryPacketCommitmentRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse, QueryPacketReceiptRequest, QueryPacketReceiptResponse, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    channel(request: QueryChannelRequest): Promise<QueryChannelResponse>;
    channels(request?: QueryChannelsRequest): Promise<QueryChannelsResponse>;
    connectionChannels(request: QueryConnectionChannelsRequest): Promise<QueryConnectionChannelsResponse>;
    channelClientState(request: QueryChannelClientStateRequest): Promise<QueryChannelClientStateResponse>;
    channelConsensusState(request: QueryChannelConsensusStateRequest): Promise<QueryChannelConsensusStateResponse>;
    packetCommitment(request: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponse>;
    packetCommitments(request: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponse>;
    packetReceipt(request: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponse>;
    packetAcknowledgement(request: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponse>;
    packetAcknowledgements(request: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponse>;
    unreceivedPackets(request: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponse>;
    unreceivedAcks(request: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponse>;
    nextSequenceReceive(request: QueryNextSequenceReceiveRequest): Promise<QueryNextSequenceReceiveResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    channel(request: QueryChannelRequest): Promise<QueryChannelResponse>;
    channels(request?: QueryChannelsRequest): Promise<QueryChannelsResponse>;
    connectionChannels(request: QueryConnectionChannelsRequest): Promise<QueryConnectionChannelsResponse>;
    channelClientState(request: QueryChannelClientStateRequest): Promise<QueryChannelClientStateResponse>;
    channelConsensusState(request: QueryChannelConsensusStateRequest): Promise<QueryChannelConsensusStateResponse>;
    packetCommitment(request: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponse>;
    packetCommitments(request: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponse>;
    packetReceipt(request: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponse>;
    packetAcknowledgement(request: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponse>;
    packetAcknowledgements(request: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponse>;
    unreceivedPackets(request: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponse>;
    unreceivedAcks(request: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponse>;
    nextSequenceReceive(request: QueryNextSequenceReceiveRequest): Promise<QueryNextSequenceReceiveResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    channel(request: QueryChannelRequest): Promise<QueryChannelResponse>;
    channels(request?: QueryChannelsRequest): Promise<QueryChannelsResponse>;
    connectionChannels(request: QueryConnectionChannelsRequest): Promise<QueryConnectionChannelsResponse>;
    channelClientState(request: QueryChannelClientStateRequest): Promise<QueryChannelClientStateResponse>;
    channelConsensusState(request: QueryChannelConsensusStateRequest): Promise<QueryChannelConsensusStateResponse>;
    packetCommitment(request: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponse>;
    packetCommitments(request: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponse>;
    packetReceipt(request: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponse>;
    packetAcknowledgement(request: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponse>;
    packetAcknowledgements(request: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponse>;
    unreceivedPackets(request: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponse>;
    unreceivedAcks(request: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponse>;
    nextSequenceReceive(request: QueryNextSequenceReceiveRequest): Promise<QueryNextSequenceReceiveResponse>;
};
