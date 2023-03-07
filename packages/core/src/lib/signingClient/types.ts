import { SigningCosmWasmClientOptions } from '@cosmjs/cosmwasm-stargate';
import {
  SigningStargateClientOptions,
  StargateClientOptions,
} from '@cosmjs/stargate';

export type SeiClientOptions = {
  useTM34?: boolean;
};

export type SeiStagateClientOptions = StargateClientOptions & SeiClientOptions;

export type SeiSigningStagateClientOptions = SigningStargateClientOptions &
  SeiClientOptions;

export type SeiSigningCosmWasmClientOptions = SigningCosmWasmClientOptions &
  SeiClientOptions;
