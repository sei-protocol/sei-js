import {
  fromTendermint34Event,
  HttpEndpoint,
  IndexedTx,
  StargateClient,
  StargateClientOptions,
} from '@cosmjs/stargate';
import { toHex } from '@cosmjs/encoding';
import { Tendermint35Client, TxSearchResponse } from '../tendermint35';
import { fromTendermint35Event } from './events';

export class SeiStargateClient extends StargateClient {
  protected constructor(
    tmClient: Tendermint35Client | undefined,
    options: StargateClientOptions
  ) {
    super(tmClient as any, options);
  }

  public static async connect(
    endpoint: string | HttpEndpoint,
    options: StargateClientOptions = {}
  ): Promise<StargateClient> {
    const tmClient = await Tendermint35Client.connect(endpoint);
    return new SeiStargateClient(tmClient, options);
  }

  public async getTx(id: string): Promise<IndexedTx | null> {
    const results = await this.txsQueryTm35(`tx.hash='${id}'`);
    return results[0] ?? null;
  }

  private async txsQueryTm35(query: string): Promise<readonly IndexedTx[]> {
    const results = (await this.forceGetTmClient().txSearchAll({
      query: query,
    })) as TxSearchResponse;
    return results.txs.map((tx) => {
      return {
        height: tx.height,
        hash: toHex(tx.hash).toUpperCase(),
        code: tx.result.code,
        events: (tx.result.events as any).map(fromTendermint35Event),
        rawLog: tx.result.log || '',
        tx: tx.tx,
        gasUsed: tx.result.gasUsed,
        gasWanted: tx.result.gasWanted,
      };
    });
  }
}
