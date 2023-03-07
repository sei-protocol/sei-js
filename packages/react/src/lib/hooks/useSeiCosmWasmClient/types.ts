import { SeiCosmWasmClient } from '@sei-js/core';

export type UseSeiCosmWasmClient = {
  isLoading: boolean;
  cosmWasmClient?: SeiCosmWasmClient;
};
