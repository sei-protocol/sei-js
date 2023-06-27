import * as _169 from "./abci/types";
import * as _170 from "./crypto/keys";
import * as _171 from "./crypto/proof";
import * as _172 from "./libs/bits/types";
import * as _173 from "./p2p/types";
import * as _174 from "./types/block";
import * as _175 from "./types/evidence";
import * as _176 from "./types/params";
import * as _177 from "./types/types";
import * as _178 from "./types/validator";
import * as _179 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _169.CheckTxType;
        checkTxTypeToJSON(object: _169.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _169.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _169.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _169.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _169.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _169.EvidenceType;
        evidenceTypeToJSON(object: _169.EvidenceType): string;
        CheckTxType: typeof _169.CheckTxType;
        CheckTxTypeSDKType: typeof _169.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _169.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _169.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _169.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _169.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _169.EvidenceType;
        EvidenceTypeSDKType: typeof _169.EvidenceType;
        Request: {
            encode(message: _169.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Request;
            fromPartial(object: any): _169.Request;
        };
        RequestEcho: {
            encode(message: _169.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.RequestEcho;
            fromPartial(object: any): _169.RequestEcho;
        };
        RequestFlush: {
            encode(_: _169.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.RequestFlush;
            fromPartial(_: any): _169.RequestFlush;
        };
        RequestInfo: {
            encode(message: _169.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.RequestInfo;
            fromPartial(object: any): _169.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _169.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.RequestSetOption;
            fromPartial(object: any): _169.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _169.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.RequestInitChain;
            fromPartial(object: any): _169.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _169.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.RequestQuery;
            fromPartial(object: any): _169.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _169.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.RequestBeginBlock;
            fromPartial(object: any): _169.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _169.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.RequestCheckTx;
            fromPartial(object: any): _169.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _169.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.RequestDeliverTx;
            fromPartial(object: any): _169.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _169.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.RequestEndBlock;
            fromPartial(object: any): _169.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _169.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.RequestCommit;
            fromPartial(_: any): _169.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _169.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.RequestListSnapshots;
            fromPartial(_: any): _169.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _169.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.RequestOfferSnapshot;
            fromPartial(object: any): _169.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _169.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.RequestLoadSnapshotChunk;
            fromPartial(object: any): _169.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _169.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.RequestApplySnapshotChunk;
            fromPartial(object: any): _169.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _169.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Response;
            fromPartial(object: any): _169.Response;
        };
        ResponseException: {
            encode(message: _169.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ResponseException;
            fromPartial(object: any): _169.ResponseException;
        };
        ResponseEcho: {
            encode(message: _169.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ResponseEcho;
            fromPartial(object: any): _169.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _169.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ResponseFlush;
            fromPartial(_: any): _169.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _169.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ResponseInfo;
            fromPartial(object: any): _169.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _169.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ResponseSetOption;
            fromPartial(object: any): _169.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _169.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ResponseInitChain;
            fromPartial(object: any): _169.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _169.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ResponseQuery;
            fromPartial(object: any): _169.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _169.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ResponseBeginBlock;
            fromPartial(object: any): _169.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _169.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ResponseCheckTx;
            fromPartial(object: any): _169.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _169.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ResponseDeliverTx;
            fromPartial(object: any): _169.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _169.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ResponseEndBlock;
            fromPartial(object: any): _169.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _169.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ResponseCommit;
            fromPartial(object: any): _169.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _169.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ResponseListSnapshots;
            fromPartial(object: any): _169.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _169.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ResponseOfferSnapshot;
            fromPartial(object: any): _169.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _169.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ResponseLoadSnapshotChunk;
            fromPartial(object: any): _169.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _169.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ResponseApplySnapshotChunk;
            fromPartial(object: any): _169.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _169.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ConsensusParams;
            fromPartial(object: any): _169.ConsensusParams;
        };
        BlockParams: {
            encode(message: _169.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.BlockParams;
            fromPartial(object: any): _169.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _169.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.LastCommitInfo;
            fromPartial(object: any): _169.LastCommitInfo;
        };
        Event: {
            encode(message: _169.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Event;
            fromPartial(object: any): _169.Event;
        };
        EventAttribute: {
            encode(message: _169.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.EventAttribute;
            fromPartial(object: any): _169.EventAttribute;
        };
        TxResult: {
            encode(message: _169.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.TxResult;
            fromPartial(object: any): _169.TxResult;
        };
        Validator: {
            encode(message: _169.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Validator;
            fromPartial(object: any): _169.Validator;
        };
        ValidatorUpdate: {
            encode(message: _169.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ValidatorUpdate;
            fromPartial(object: any): _169.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _169.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.VoteInfo;
            fromPartial(object: any): _169.VoteInfo;
        };
        Evidence: {
            encode(message: _169.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Evidence;
            fromPartial(object: any): _169.Evidence;
        };
        Snapshot: {
            encode(message: _169.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Snapshot;
            fromPartial(object: any): _169.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _171.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.Proof;
            fromPartial(object: any): _171.Proof;
        };
        ValueOp: {
            encode(message: _171.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.ValueOp;
            fromPartial(object: any): _171.ValueOp;
        };
        DominoOp: {
            encode(message: _171.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.DominoOp;
            fromPartial(object: any): _171.DominoOp;
        };
        ProofOp: {
            encode(message: _171.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.ProofOp;
            fromPartial(object: any): _171.ProofOp;
        };
        ProofOps: {
            encode(message: _171.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.ProofOps;
            fromPartial(object: any): _171.ProofOps;
        };
        PublicKey: {
            encode(message: _170.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.PublicKey;
            fromPartial(object: any): _170.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _172.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.BitArray;
                fromPartial(object: any): _172.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _173.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.ProtocolVersion;
            fromPartial(object: any): _173.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _173.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.NodeInfo;
            fromPartial(object: any): _173.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _173.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.NodeInfoOther;
            fromPartial(object: any): _173.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _173.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.PeerInfo;
            fromPartial(object: any): _173.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _173.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.PeerAddressInfo;
            fromPartial(object: any): _173.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _178.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.ValidatorSet;
            fromPartial(object: any): _178.ValidatorSet;
        };
        Validator: {
            encode(message: _178.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.Validator;
            fromPartial(object: any): _178.Validator;
        };
        SimpleValidator: {
            encode(message: _178.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.SimpleValidator;
            fromPartial(object: any): _178.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _177.BlockIDFlag;
        blockIDFlagToJSON(object: _177.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _177.SignedMsgType;
        signedMsgTypeToJSON(object: _177.SignedMsgType): string;
        BlockIDFlag: typeof _177.BlockIDFlag;
        BlockIDFlagSDKType: typeof _177.BlockIDFlag;
        SignedMsgType: typeof _177.SignedMsgType;
        SignedMsgTypeSDKType: typeof _177.SignedMsgType;
        PartSetHeader: {
            encode(message: _177.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.PartSetHeader;
            fromPartial(object: any): _177.PartSetHeader;
        };
        Part: {
            encode(message: _177.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.Part;
            fromPartial(object: any): _177.Part;
        };
        BlockID: {
            encode(message: _177.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.BlockID;
            fromPartial(object: any): _177.BlockID;
        };
        Header: {
            encode(message: _177.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.Header;
            fromPartial(object: any): _177.Header;
        };
        Data: {
            encode(message: _177.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.Data;
            fromPartial(object: any): _177.Data;
        };
        Vote: {
            encode(message: _177.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.Vote;
            fromPartial(object: any): _177.Vote;
        };
        Commit: {
            encode(message: _177.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.Commit;
            fromPartial(object: any): _177.Commit;
        };
        CommitSig: {
            encode(message: _177.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.CommitSig;
            fromPartial(object: any): _177.CommitSig;
        };
        Proposal: {
            encode(message: _177.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.Proposal;
            fromPartial(object: any): _177.Proposal;
        };
        SignedHeader: {
            encode(message: _177.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.SignedHeader;
            fromPartial(object: any): _177.SignedHeader;
        };
        LightBlock: {
            encode(message: _177.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.LightBlock;
            fromPartial(object: any): _177.LightBlock;
        };
        BlockMeta: {
            encode(message: _177.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.BlockMeta;
            fromPartial(object: any): _177.BlockMeta;
        };
        TxProof: {
            encode(message: _177.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.TxProof;
            fromPartial(object: any): _177.TxProof;
        };
        ConsensusParams: {
            encode(message: _176.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ConsensusParams;
            fromPartial(object: any): _176.ConsensusParams;
        };
        BlockParams: {
            encode(message: _176.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.BlockParams;
            fromPartial(object: any): _176.BlockParams;
        };
        EvidenceParams: {
            encode(message: _176.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.EvidenceParams;
            fromPartial(object: any): _176.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _176.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ValidatorParams;
            fromPartial(object: any): _176.ValidatorParams;
        };
        VersionParams: {
            encode(message: _176.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.VersionParams;
            fromPartial(object: any): _176.VersionParams;
        };
        HashedParams: {
            encode(message: _176.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.HashedParams;
            fromPartial(object: any): _176.HashedParams;
        };
        Evidence: {
            encode(message: _175.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.Evidence;
            fromPartial(object: any): _175.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _175.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.DuplicateVoteEvidence;
            fromPartial(object: any): _175.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _175.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.LightClientAttackEvidence;
            fromPartial(object: any): _175.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _175.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.EvidenceList;
            fromPartial(object: any): _175.EvidenceList;
        };
        Block: {
            encode(message: _174.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.Block;
            fromPartial(object: any): _174.Block;
        };
    };
    const version: {
        App: {
            encode(message: _179.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.App;
            fromPartial(object: any): _179.App;
        };
        Consensus: {
            encode(message: _179.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.Consensus;
            fromPartial(object: any): _179.Consensus;
        };
    };
}
