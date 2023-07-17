import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const ibcAminoConverters: {
    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
        aminoType: string;
        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: import("./core/connection/v1/tx").MsgConnectionOpenInit) => {
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
        }) => import("./core/connection/v1/tx").MsgConnectionOpenInit;
    };
    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
        aminoType: string;
        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: import("./core/connection/v1/tx").MsgConnectionOpenTry) => {
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
        }) => import("./core/connection/v1/tx").MsgConnectionOpenTry;
    };
    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
        aminoType: string;
        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: import("./core/connection/v1/tx").MsgConnectionOpenAck) => {
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
        }) => import("./core/connection/v1/tx").MsgConnectionOpenAck;
    };
    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
        aminoType: string;
        toAmino: ({ connectionId, proofAck, proofHeight, signer }: import("./core/connection/v1/tx").MsgConnectionOpenConfirm) => {
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
        }) => import("./core/connection/v1/tx").MsgConnectionOpenConfirm;
    };
    "/ibc.core.client.v1.MsgCreateClient": {
        aminoType: string;
        toAmino: ({ clientState, consensusState, signer }: import("./core/client/v1/tx").MsgCreateClient) => {
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
        }) => import("./core/client/v1/tx").MsgCreateClient;
    };
    "/ibc.core.client.v1.MsgUpdateClient": {
        aminoType: string;
        toAmino: ({ clientId, header, signer }: import("./core/client/v1/tx").MsgUpdateClient) => {
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
        }) => import("./core/client/v1/tx").MsgUpdateClient;
    };
    "/ibc.core.client.v1.MsgUpgradeClient": {
        aminoType: string;
        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: import("./core/client/v1/tx").MsgUpgradeClient) => {
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
        }) => import("./core/client/v1/tx").MsgUpgradeClient;
    };
    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
        aminoType: string;
        toAmino: ({ clientId, misbehaviour, signer }: import("./core/client/v1/tx").MsgSubmitMisbehaviour) => {
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
        }) => import("./core/client/v1/tx").MsgSubmitMisbehaviour;
    };
    "/ibc.core.channel.v1.MsgChannelOpenInit": {
        aminoType: string;
        toAmino: ({ portId, channel, signer }: import("./core/channel/v1/tx").MsgChannelOpenInit) => {
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
        }) => import("./core/channel/v1/tx").MsgChannelOpenInit;
    };
    "/ibc.core.channel.v1.MsgChannelOpenTry": {
        aminoType: string;
        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: import("./core/channel/v1/tx").MsgChannelOpenTry) => {
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
        }) => import("./core/channel/v1/tx").MsgChannelOpenTry;
    };
    "/ibc.core.channel.v1.MsgChannelOpenAck": {
        aminoType: string;
        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: import("./core/channel/v1/tx").MsgChannelOpenAck) => {
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
        }) => import("./core/channel/v1/tx").MsgChannelOpenAck;
    };
    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
        aminoType: string;
        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: import("./core/channel/v1/tx").MsgChannelOpenConfirm) => {
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
        }) => import("./core/channel/v1/tx").MsgChannelOpenConfirm;
    };
    "/ibc.core.channel.v1.MsgChannelCloseInit": {
        aminoType: string;
        toAmino: ({ portId, channelId, signer }: import("./core/channel/v1/tx").MsgChannelCloseInit) => {
            port_id: string;
            channel_id: string;
            signer: string;
        };
        fromAmino: ({ port_id, channel_id, signer }: {
            port_id: string;
            channel_id: string;
            signer: string;
        }) => import("./core/channel/v1/tx").MsgChannelCloseInit;
    };
    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
        aminoType: string;
        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: import("./core/channel/v1/tx").MsgChannelCloseConfirm) => {
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
        }) => import("./core/channel/v1/tx").MsgChannelCloseConfirm;
    };
    "/ibc.core.channel.v1.MsgRecvPacket": {
        aminoType: string;
        toAmino: ({ packet, proofCommitment, proofHeight, signer }: import("./core/channel/v1/tx").MsgRecvPacket) => {
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
        }) => import("./core/channel/v1/tx").MsgRecvPacket;
    };
    "/ibc.core.channel.v1.MsgTimeout": {
        aminoType: string;
        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: import("./core/channel/v1/tx").MsgTimeout) => {
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
        }) => import("./core/channel/v1/tx").MsgTimeout;
    };
    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
        aminoType: string;
        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: import("./core/channel/v1/tx").MsgTimeoutOnClose) => {
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
        }) => import("./core/channel/v1/tx").MsgTimeoutOnClose;
    };
    "/ibc.core.channel.v1.MsgAcknowledgement": {
        aminoType: string;
        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: import("./core/channel/v1/tx").MsgAcknowledgement) => {
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
        }) => import("./core/channel/v1/tx").MsgAcknowledgement;
    };
    "/ibc.applications.transfer.v1.MsgTransfer": {
        aminoType: string;
        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: import("./applications/transfer/v1/tx").MsgTransfer) => {
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
        }) => import("./applications/transfer/v1/tx").MsgTransfer;
    };
};
export declare const ibcProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningIbcClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningIbcClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
