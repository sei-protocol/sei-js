import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as seiprotocolSeichainDexTxRegistry from "./seichain/dex/tx.registry";
import * as seiprotocolSeichainNitroTxRegistry from "./seichain/nitro/tx.registry";
import * as seiprotocolSeichainOracleTxRegistry from "./seichain/oracle/tx.registry";
import * as seiprotocolSeichainTokenfactoryTxRegistry from "./seichain/tokenfactory/tx.registry";
import * as seiprotocolSeichainDexTxAmino from "./seichain/dex/tx.amino";
import * as seiprotocolSeichainNitroTxAmino from "./seichain/nitro/tx.amino";
import * as seiprotocolSeichainOracleTxAmino from "./seichain/oracle/tx.amino";
import * as seiprotocolSeichainTokenfactoryTxAmino from "./seichain/tokenfactory/tx.amino";
export const seiprotocolAminoConverters = {
  ...seiprotocolSeichainDexTxAmino.AminoConverter,
  ...seiprotocolSeichainNitroTxAmino.AminoConverter,
  ...seiprotocolSeichainOracleTxAmino.AminoConverter,
  ...seiprotocolSeichainTokenfactoryTxAmino.AminoConverter
};
export const seiprotocolProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...seiprotocolSeichainDexTxRegistry.registry, ...seiprotocolSeichainNitroTxRegistry.registry, ...seiprotocolSeichainOracleTxRegistry.registry, ...seiprotocolSeichainTokenfactoryTxRegistry.registry];
export const getSigningSeiprotocolClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...seiprotocolProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...seiprotocolAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningSeiprotocolClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningSeiprotocolClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};