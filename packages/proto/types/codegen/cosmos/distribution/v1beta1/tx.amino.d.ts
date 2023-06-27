import { AminoMsg } from "@cosmjs/amino";
import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgFundCommunityPool } from "./tx";
export interface MsgSetWithdrawAddressAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgModifyWithdrawAddress";
    value: {
        delegator_address: string;
        withdraw_address: string;
    };
}
export interface MsgWithdrawDelegatorRewardAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgWithdrawDelegationReward";
    value: {
        delegator_address: string;
        validator_address: string;
    };
}
export interface MsgWithdrawValidatorCommissionAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgWithdrawValidatorCommission";
    value: {
        validator_address: string;
    };
}
export interface MsgFundCommunityPoolAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgFundCommunityPool";
    value: {
        amount: {
            denom: string;
            amount: string;
        }[];
        depositor: string;
    };
}
export declare const AminoConverter: {
    "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
        aminoType: string;
        toAmino: ({ delegatorAddress, withdrawAddress }: MsgSetWithdrawAddress) => MsgSetWithdrawAddressAminoType["value"];
        fromAmino: ({ delegator_address, withdraw_address }: MsgSetWithdrawAddressAminoType["value"]) => MsgSetWithdrawAddress;
    };
    "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
        aminoType: string;
        toAmino: ({ delegatorAddress, validatorAddress }: MsgWithdrawDelegatorReward) => MsgWithdrawDelegatorRewardAminoType["value"];
        fromAmino: ({ delegator_address, validator_address }: MsgWithdrawDelegatorRewardAminoType["value"]) => MsgWithdrawDelegatorReward;
    };
    "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
        aminoType: string;
        toAmino: ({ validatorAddress }: MsgWithdrawValidatorCommission) => MsgWithdrawValidatorCommissionAminoType["value"];
        fromAmino: ({ validator_address }: MsgWithdrawValidatorCommissionAminoType["value"]) => MsgWithdrawValidatorCommission;
    };
    "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
        aminoType: string;
        toAmino: ({ amount, depositor }: MsgFundCommunityPool) => MsgFundCommunityPoolAminoType["value"];
        fromAmino: ({ amount, depositor }: MsgFundCommunityPoolAminoType["value"]) => MsgFundCommunityPool;
    };
};
