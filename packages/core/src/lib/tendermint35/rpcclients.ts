import { JsonRpcRequest } from '@cosmjs/json-rpc';
import { RpcClient } from '@cosmjs/tendermint-rpc';
import { Stream } from 'xstream';

/**
 * An event emitted from Tendermint after subscribing via RPC.
 *
 * These events are passed as the `result` of JSON-RPC responses, which is kind
 * of hacky because it breaks the idea that exactly one JSON-RPC response belongs
 * to each JSON-RPC request. But this is how subscriptions work in Tendermint.
 */
export interface SubscriptionEvent {
  readonly query: string;
  readonly data: {
    readonly type: string;
    readonly value: any;
  };
}

export interface RpcStreamingClient extends RpcClient {
  readonly listen: (request: JsonRpcRequest) => Stream<SubscriptionEvent>;
}

export function instanceOfRpcStreamingClient(
  client: RpcClient
): client is RpcStreamingClient {
  return typeof (client as any).listen === 'function';
}
