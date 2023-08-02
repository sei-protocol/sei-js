import * as _115 from "./abci/types";
import * as _116 from "./crypto/keys";
import * as _117 from "./crypto/proof";
import * as _118 from "./libs/bits/types";
import * as _119 from "./p2p/types";
import * as _120 from "./types/block";
import * as _121 from "./types/evidence";
import * as _122 from "./types/params";
import * as _123 from "./types/types";
import * as _124 from "./types/validator";
import * as _125 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _115.CheckTxType;
        checkTxTypeToJSON(object: _115.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _115.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _115.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _115.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _115.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _115.EvidenceType;
        evidenceTypeToJSON(object: _115.EvidenceType): string;
        CheckTxType: typeof _115.CheckTxType;
        CheckTxTypeSDKType: typeof _115.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _115.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _115.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _115.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _115.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _115.EvidenceType;
        EvidenceTypeSDKType: typeof _115.EvidenceType;
        Request: {
            encode(message: _115.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Request;
            fromPartial(object: any): _115.Request;
        };
        RequestEcho: {
            encode(message: _115.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.RequestEcho;
            fromPartial(object: any): _115.RequestEcho;
        };
        RequestFlush: {
            encode(_: _115.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.RequestFlush;
            fromPartial(_: any): _115.RequestFlush;
        };
        RequestInfo: {
            encode(message: _115.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.RequestInfo;
            fromPartial(object: any): _115.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _115.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.RequestSetOption;
            fromPartial(object: any): _115.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _115.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.RequestInitChain;
            fromPartial(object: any): _115.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _115.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.RequestQuery;
            fromPartial(object: any): _115.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _115.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.RequestBeginBlock;
            fromPartial(object: any): _115.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _115.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.RequestCheckTx;
            fromPartial(object: any): _115.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _115.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.RequestDeliverTx;
            fromPartial(object: any): _115.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _115.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.RequestEndBlock;
            fromPartial(object: any): _115.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _115.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.RequestCommit;
            fromPartial(_: any): _115.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _115.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.RequestListSnapshots;
            fromPartial(_: any): _115.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _115.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.RequestOfferSnapshot;
            fromPartial(object: any): _115.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _115.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.RequestLoadSnapshotChunk;
            fromPartial(object: any): _115.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _115.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.RequestApplySnapshotChunk;
            fromPartial(object: any): _115.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _115.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Response;
            fromPartial(object: any): _115.Response;
        };
        ResponseException: {
            encode(message: _115.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ResponseException;
            fromPartial(object: any): _115.ResponseException;
        };
        ResponseEcho: {
            encode(message: _115.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ResponseEcho;
            fromPartial(object: any): _115.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _115.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ResponseFlush;
            fromPartial(_: any): _115.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _115.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ResponseInfo;
            fromPartial(object: any): _115.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _115.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ResponseSetOption;
            fromPartial(object: any): _115.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _115.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ResponseInitChain;
            fromPartial(object: any): _115.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _115.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ResponseQuery;
            fromPartial(object: any): _115.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _115.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ResponseBeginBlock;
            fromPartial(object: any): _115.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _115.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ResponseCheckTx;
            fromPartial(object: any): _115.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _115.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ResponseDeliverTx;
            fromPartial(object: any): _115.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _115.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ResponseEndBlock;
            fromPartial(object: any): _115.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _115.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ResponseCommit;
            fromPartial(object: any): _115.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _115.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ResponseListSnapshots;
            fromPartial(object: any): _115.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _115.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ResponseOfferSnapshot;
            fromPartial(object: any): _115.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _115.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ResponseLoadSnapshotChunk;
            fromPartial(object: any): _115.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _115.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ResponseApplySnapshotChunk;
            fromPartial(object: any): _115.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _115.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ConsensusParams;
            fromPartial(object: any): _115.ConsensusParams;
        };
        BlockParams: {
            encode(message: _115.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.BlockParams;
            fromPartial(object: any): _115.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _115.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.LastCommitInfo;
            fromPartial(object: any): _115.LastCommitInfo;
        };
        Event: {
            encode(message: _115.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Event;
            fromPartial(object: any): _115.Event;
        };
        EventAttribute: {
            encode(message: _115.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.EventAttribute;
            fromPartial(object: any): _115.EventAttribute;
        };
        TxResult: {
            encode(message: _115.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.TxResult;
            fromPartial(object: any): _115.TxResult;
        };
        Validator: {
            encode(message: _115.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Validator;
            fromPartial(object: any): _115.Validator;
        };
        ValidatorUpdate: {
            encode(message: _115.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ValidatorUpdate;
            fromPartial(object: any): _115.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _115.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.VoteInfo;
            fromPartial(object: any): _115.VoteInfo;
        };
        Evidence: {
            encode(message: _115.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Evidence;
            fromPartial(object: any): _115.Evidence;
        };
        Snapshot: {
            encode(message: _115.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Snapshot;
            fromPartial(object: any): _115.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _117.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.Proof;
            fromPartial(object: any): _117.Proof;
        };
        ValueOp: {
            encode(message: _117.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.ValueOp;
            fromPartial(object: any): _117.ValueOp;
        };
        DominoOp: {
            encode(message: _117.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.DominoOp;
            fromPartial(object: any): _117.DominoOp;
        };
        ProofOp: {
            encode(message: _117.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.ProofOp;
            fromPartial(object: any): _117.ProofOp;
        };
        ProofOps: {
            encode(message: _117.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.ProofOps;
            fromPartial(object: any): _117.ProofOps;
        };
        PublicKey: {
            encode(message: _116.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.PublicKey;
            fromPartial(object: any): _116.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _118.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.BitArray;
                fromPartial(object: any): _118.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _119.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ProtocolVersion;
            fromPartial(object: any): _119.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _119.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.NodeInfo;
            fromPartial(object: any): _119.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _119.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.NodeInfoOther;
            fromPartial(object: any): _119.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _119.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.PeerInfo;
            fromPartial(object: any): _119.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _119.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.PeerAddressInfo;
            fromPartial(object: any): _119.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _124.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ValidatorSet;
            fromPartial(object: any): _124.ValidatorSet;
        };
        Validator: {
            encode(message: _124.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Validator;
            fromPartial(object: any): _124.Validator;
        };
        SimpleValidator: {
            encode(message: _124.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.SimpleValidator;
            fromPartial(object: any): _124.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _123.BlockIDFlag;
        blockIDFlagToJSON(object: _123.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _123.SignedMsgType;
        signedMsgTypeToJSON(object: _123.SignedMsgType): string;
        BlockIDFlag: typeof _123.BlockIDFlag;
        BlockIDFlagSDKType: typeof _123.BlockIDFlag;
        SignedMsgType: typeof _123.SignedMsgType;
        SignedMsgTypeSDKType: typeof _123.SignedMsgType;
        PartSetHeader: {
            encode(message: _123.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.PartSetHeader;
            fromPartial(object: any): _123.PartSetHeader;
        };
        Part: {
            encode(message: _123.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.Part;
            fromPartial(object: any): _123.Part;
        };
        BlockID: {
            encode(message: _123.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.BlockID;
            fromPartial(object: any): _123.BlockID;
        };
        Header: {
            encode(message: _123.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.Header;
            fromPartial(object: any): _123.Header;
        };
        Data: {
            encode(message: _123.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.Data;
            fromPartial(object: any): _123.Data;
        };
        Vote: {
            encode(message: _123.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.Vote;
            fromPartial(object: any): _123.Vote;
        };
        Commit: {
            encode(message: _123.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.Commit;
            fromPartial(object: any): _123.Commit;
        };
        CommitSig: {
            encode(message: _123.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.CommitSig;
            fromPartial(object: any): _123.CommitSig;
        };
        Proposal: {
            encode(message: _123.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.Proposal;
            fromPartial(object: any): _123.Proposal;
        };
        SignedHeader: {
            encode(message: _123.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.SignedHeader;
            fromPartial(object: any): _123.SignedHeader;
        };
        LightBlock: {
            encode(message: _123.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.LightBlock;
            fromPartial(object: any): _123.LightBlock;
        };
        BlockMeta: {
            encode(message: _123.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.BlockMeta;
            fromPartial(object: any): _123.BlockMeta;
        };
        TxProof: {
            encode(message: _123.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.TxProof;
            fromPartial(object: any): _123.TxProof;
        };
        ConsensusParams: {
            encode(message: _122.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ConsensusParams;
            fromPartial(object: any): _122.ConsensusParams;
        };
        BlockParams: {
            encode(message: _122.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.BlockParams;
            fromPartial(object: any): _122.BlockParams;
        };
        EvidenceParams: {
            encode(message: _122.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.EvidenceParams;
            fromPartial(object: any): _122.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _122.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ValidatorParams;
            fromPartial(object: any): _122.ValidatorParams;
        };
        VersionParams: {
            encode(message: _122.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.VersionParams;
            fromPartial(object: any): _122.VersionParams;
        };
        HashedParams: {
            encode(message: _122.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.HashedParams;
            fromPartial(object: any): _122.HashedParams;
        };
        Evidence: {
            encode(message: _121.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.Evidence;
            fromPartial(object: any): _121.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _121.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.DuplicateVoteEvidence;
            fromPartial(object: any): _121.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _121.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.LightClientAttackEvidence;
            fromPartial(object: any): _121.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _121.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.EvidenceList;
            fromPartial(object: any): _121.EvidenceList;
        };
        Block: {
            encode(message: _120.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Block;
            fromPartial(object: any): _120.Block;
        };
    };
    const version: {
        App: {
            encode(message: _125.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.App;
            fromPartial(object: any): _125.App;
        };
        Consensus: {
            encode(message: _125.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Consensus;
            fromPartial(object: any): _125.Consensus;
        };
    };
}
