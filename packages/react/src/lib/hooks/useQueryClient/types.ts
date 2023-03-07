import { getQueryClient } from '@sei-js/core';

export type QueryClient = Awaited<ReturnType<typeof getQueryClient>>;

export type UseQueryClient = {
  isLoading: boolean;
  queryClient?: QueryClient;
};
