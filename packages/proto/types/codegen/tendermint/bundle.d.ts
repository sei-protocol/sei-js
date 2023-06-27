import * as _174 from "./abci/types";
import * as _175 from "./crypto/keys";
import * as _176 from "./crypto/proof";
import * as _177 from "./libs/bits/types";
import * as _178 from "./p2p/types";
import * as _179 from "./types/block";
import * as _180 from "./types/evidence";
import * as _181 from "./types/params";
import * as _182 from "./types/types";
import * as _183 from "./types/validator";
import * as _184 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _174.CheckTxType;
        checkTxTypeToJSON(object: _174.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _174.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _174.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _174.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _174.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _174.EvidenceType;
        evidenceTypeToJSON(object: _174.EvidenceType): string;
        CheckTxType: typeof _174.CheckTxType;
        CheckTxTypeSDKType: typeof _174.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _174.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _174.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _174.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _174.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _174.EvidenceType;
        EvidenceTypeSDKType: typeof _174.EvidenceType;
        Request: {
            encode(message: _174.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.Request;
            fromPartial(object: any): _174.Request;
        };
        RequestEcho: {
            encode(message: _174.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.RequestEcho;
            fromPartial(object: any): _174.RequestEcho;
        };
        RequestFlush: {
            encode(_: _174.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.RequestFlush;
            fromPartial(_: any): _174.RequestFlush;
        };
        RequestInfo: {
            encode(message: _174.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.RequestInfo;
            fromPartial(object: any): _174.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _174.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.RequestSetOption;
            fromPartial(object: any): _174.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _174.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.RequestInitChain;
            fromPartial(object: any): _174.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _174.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.RequestQuery;
            fromPartial(object: any): _174.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _174.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.RequestBeginBlock;
            fromPartial(object: any): _174.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _174.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.RequestCheckTx;
            fromPartial(object: any): _174.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _174.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.RequestDeliverTx;
            fromPartial(object: any): _174.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _174.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.RequestEndBlock;
            fromPartial(object: any): _174.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _174.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.RequestCommit;
            fromPartial(_: any): _174.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _174.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.RequestListSnapshots;
            fromPartial(_: any): _174.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _174.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.RequestOfferSnapshot;
            fromPartial(object: any): _174.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _174.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.RequestLoadSnapshotChunk;
            fromPartial(object: any): _174.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _174.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.RequestApplySnapshotChunk;
            fromPartial(object: any): _174.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _174.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.Response;
            fromPartial(object: any): _174.Response;
        };
        ResponseException: {
            encode(message: _174.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ResponseException;
            fromPartial(object: any): _174.ResponseException;
        };
        ResponseEcho: {
            encode(message: _174.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ResponseEcho;
            fromPartial(object: any): _174.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _174.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ResponseFlush;
            fromPartial(_: any): _174.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _174.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ResponseInfo;
            fromPartial(object: any): _174.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _174.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ResponseSetOption;
            fromPartial(object: any): _174.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _174.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ResponseInitChain;
            fromPartial(object: any): _174.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _174.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ResponseQuery;
            fromPartial(object: any): _174.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _174.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ResponseBeginBlock;
            fromPartial(object: any): _174.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _174.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ResponseCheckTx;
            fromPartial(object: any): _174.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _174.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ResponseDeliverTx;
            fromPartial(object: any): _174.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _174.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ResponseEndBlock;
            fromPartial(object: any): _174.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _174.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ResponseCommit;
            fromPartial(object: any): _174.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _174.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ResponseListSnapshots;
            fromPartial(object: any): _174.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _174.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ResponseOfferSnapshot;
            fromPartial(object: any): _174.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _174.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ResponseLoadSnapshotChunk;
            fromPartial(object: any): _174.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _174.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ResponseApplySnapshotChunk;
            fromPartial(object: any): _174.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _174.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ConsensusParams;
            fromPartial(object: any): _174.ConsensusParams;
        };
        BlockParams: {
            encode(message: _174.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.BlockParams;
            fromPartial(object: any): _174.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _174.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.LastCommitInfo;
            fromPartial(object: any): _174.LastCommitInfo;
        };
        Event: {
            encode(message: _174.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.Event;
            fromPartial(object: any): _174.Event;
        };
        EventAttribute: {
            encode(message: _174.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.EventAttribute;
            fromPartial(object: any): _174.EventAttribute;
        };
        TxResult: {
            encode(message: _174.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.TxResult;
            fromPartial(object: any): _174.TxResult;
        };
        Validator: {
            encode(message: _174.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.Validator;
            fromPartial(object: any): _174.Validator;
        };
        ValidatorUpdate: {
            encode(message: _174.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ValidatorUpdate;
            fromPartial(object: any): _174.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _174.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.VoteInfo;
            fromPartial(object: any): _174.VoteInfo;
        };
        Evidence: {
            encode(message: _174.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.Evidence;
            fromPartial(object: any): _174.Evidence;
        };
        Snapshot: {
            encode(message: _174.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.Snapshot;
            fromPartial(object: any): _174.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _176.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.Proof;
            fromPartial(object: any): _176.Proof;
        };
        ValueOp: {
            encode(message: _176.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ValueOp;
            fromPartial(object: any): _176.ValueOp;
        };
        DominoOp: {
            encode(message: _176.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.DominoOp;
            fromPartial(object: any): _176.DominoOp;
        };
        ProofOp: {
            encode(message: _176.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ProofOp;
            fromPartial(object: any): _176.ProofOp;
        };
        ProofOps: {
            encode(message: _176.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ProofOps;
            fromPartial(object: any): _176.ProofOps;
        };
        PublicKey: {
            encode(message: _175.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.PublicKey;
            fromPartial(object: any): _175.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _177.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.BitArray;
                fromPartial(object: any): _177.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _178.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.ProtocolVersion;
            fromPartial(object: any): _178.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _178.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.NodeInfo;
            fromPartial(object: any): _178.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _178.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.NodeInfoOther;
            fromPartial(object: any): _178.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _178.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.PeerInfo;
            fromPartial(object: any): _178.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _178.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.PeerAddressInfo;
            fromPartial(object: any): _178.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _183.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.ValidatorSet;
            fromPartial(object: any): _183.ValidatorSet;
        };
        Validator: {
            encode(message: _183.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.Validator;
            fromPartial(object: any): _183.Validator;
        };
        SimpleValidator: {
            encode(message: _183.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.SimpleValidator;
            fromPartial(object: any): _183.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _182.BlockIDFlag;
        blockIDFlagToJSON(object: _182.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _182.SignedMsgType;
        signedMsgTypeToJSON(object: _182.SignedMsgType): string;
        BlockIDFlag: typeof _182.BlockIDFlag;
        BlockIDFlagSDKType: typeof _182.BlockIDFlag;
        SignedMsgType: typeof _182.SignedMsgType;
        SignedMsgTypeSDKType: typeof _182.SignedMsgType;
        PartSetHeader: {
            encode(message: _182.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.PartSetHeader;
            fromPartial(object: any): _182.PartSetHeader;
        };
        Part: {
            encode(message: _182.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.Part;
            fromPartial(object: any): _182.Part;
        };
        BlockID: {
            encode(message: _182.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.BlockID;
            fromPartial(object: any): _182.BlockID;
        };
        Header: {
            encode(message: _182.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.Header;
            fromPartial(object: any): _182.Header;
        };
        Data: {
            encode(message: _182.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.Data;
            fromPartial(object: any): _182.Data;
        };
        Vote: {
            encode(message: _182.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.Vote;
            fromPartial(object: any): _182.Vote;
        };
        Commit: {
            encode(message: _182.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.Commit;
            fromPartial(object: any): _182.Commit;
        };
        CommitSig: {
            encode(message: _182.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.CommitSig;
            fromPartial(object: any): _182.CommitSig;
        };
        Proposal: {
            encode(message: _182.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.Proposal;
            fromPartial(object: any): _182.Proposal;
        };
        SignedHeader: {
            encode(message: _182.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.SignedHeader;
            fromPartial(object: any): _182.SignedHeader;
        };
        LightBlock: {
            encode(message: _182.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.LightBlock;
            fromPartial(object: any): _182.LightBlock;
        };
        BlockMeta: {
            encode(message: _182.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.BlockMeta;
            fromPartial(object: any): _182.BlockMeta;
        };
        TxProof: {
            encode(message: _182.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.TxProof;
            fromPartial(object: any): _182.TxProof;
        };
        ConsensusParams: {
            encode(message: _181.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.ConsensusParams;
            fromPartial(object: any): _181.ConsensusParams;
        };
        BlockParams: {
            encode(message: _181.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.BlockParams;
            fromPartial(object: any): _181.BlockParams;
        };
        EvidenceParams: {
            encode(message: _181.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.EvidenceParams;
            fromPartial(object: any): _181.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _181.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.ValidatorParams;
            fromPartial(object: any): _181.ValidatorParams;
        };
        VersionParams: {
            encode(message: _181.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.VersionParams;
            fromPartial(object: any): _181.VersionParams;
        };
        HashedParams: {
            encode(message: _181.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.HashedParams;
            fromPartial(object: any): _181.HashedParams;
        };
        Evidence: {
            encode(message: _180.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.Evidence;
            fromPartial(object: any): _180.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _180.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.DuplicateVoteEvidence;
            fromPartial(object: any): _180.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _180.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.LightClientAttackEvidence;
            fromPartial(object: any): _180.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _180.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.EvidenceList;
            fromPartial(object: any): _180.EvidenceList;
        };
        Block: {
            encode(message: _179.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.Block;
            fromPartial(object: any): _179.Block;
        };
    };
    const version: {
        App: {
            encode(message: _184.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.App;
            fromPartial(object: any): _184.App;
        };
        Consensus: {
            encode(message: _184.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.Consensus;
            fromPartial(object: any): _184.Consensus;
        };
    };
}
