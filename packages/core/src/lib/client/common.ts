import { toHex } from '@cosmjs/encoding';
import { IndexedTx } from '@cosmjs/stargate';
import { Tendermint35Client } from '../tendermint35';
import { fromTendermint35Event } from './events';

export const txsQuery = async (
  tmClient: Tendermint35Client,
  query: string
): Promise<readonly IndexedTx[]> => {
  const results = await tmClient.txSearchAll({
    query: query,
  });
  return results.txs.map((tx) => {
    return {
      height: tx.height,
      hash: toHex(tx.hash).toUpperCase(),
      code: tx.result.code,
      events: tx.result.events.map(fromTendermint35Event),
      rawLog: tx.result.log || '',
      tx: tx.tx,
      gasUsed: tx.result.gasUsed,
      gasWanted: tx.result.gasWanted,
    };
  });
};
