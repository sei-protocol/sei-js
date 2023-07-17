import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateVestingAccount, MsgCreatePermanentLockedAccount, MsgCreatePeriodicVestingAccount } from "./tx";
export interface MsgCreateVestingAccountAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgCreateVestingAccount";
    value: {
        from_address: string;
        to_address: string;
        amount: {
            denom: string;
            amount: string;
        }[];
        end_time: string;
        delayed: boolean;
    };
}
export interface MsgCreatePermanentLockedAccountAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgCreatePermanentLockedAccount";
    value: {
        from_address: string;
        to_address: string;
        amount: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface MsgCreatePeriodicVestingAccountAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgCreatePeriodicVestingAccount";
    value: {
        from_address: string;
        to_address: string;
        start_time: string;
        vesting_periods: {
            length: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        }[];
    };
}
export declare const AminoConverter: {
    "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
        aminoType: string;
        toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: MsgCreateVestingAccount) => MsgCreateVestingAccountAminoType["value"];
        fromAmino: ({ from_address, to_address, amount, end_time, delayed }: MsgCreateVestingAccountAminoType["value"]) => MsgCreateVestingAccount;
    };
    "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
        aminoType: string;
        toAmino: ({ fromAddress, toAddress, amount }: MsgCreatePermanentLockedAccount) => MsgCreatePermanentLockedAccountAminoType["value"];
        fromAmino: ({ from_address, to_address, amount }: MsgCreatePermanentLockedAccountAminoType["value"]) => MsgCreatePermanentLockedAccount;
    };
    "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
        aminoType: string;
        toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: MsgCreatePeriodicVestingAccount) => MsgCreatePeriodicVestingAccountAminoType["value"];
        fromAmino: ({ from_address, to_address, start_time, vesting_periods }: MsgCreatePeriodicVestingAccountAminoType["value"]) => MsgCreatePeriodicVestingAccount;
    };
};
