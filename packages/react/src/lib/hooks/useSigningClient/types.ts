import { SeiSigningStargateClient } from '@sei-js/core';

export type UseSigningClient = {
  isLoading: boolean;
  signingClient?: SeiSigningStargateClient;
};
