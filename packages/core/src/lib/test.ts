import { SeiStargateClient } from './client';
import { StargateClient } from '@cosmjs/stargate';

const RPC_URL = 'https://rpc.sei-devnet-2.seinetwork.io/';
const ADDR = 'sei14ae4g3422thcyuxler2ws3w25fpesrh2uqmgm9';
// const RPC_URL = 'http://3.73.138.242:26657/';

const main = async () => {
  const client = await SeiStargateClient.connect(RPC_URL);

  // const height = await client.getHeight();
  // console.log(height);

  // const account = await client.getAccount(ADDR);
  // console.log(account);

  // const sequence = await client.getSequence(ADDR);
  // console.log(sequence);

  // const block = await client.getBlock(6043337);
  // console.log(block);

  // const balance = await client.getBalance(ADDR, 'usei');
  // console.log(balance);

  // const allBalances = await client.getAllBalances(ADDR);
  // console.log(allBalances);

  // const balanceStaked = await client.getBalanceStaked(ADDR);
  // console.log(balanceStaked);

  // const tx = await client.getTx(
  //   '0BDD07E1384153578A962753CD20F8A2A187C9A9428B604F15C9C1CF27F43D8F'
  // );
  // console.log(tx);

  const searchedTx = await client.searchTx({ sentFromOrTo: ADDR });
  console.log(searchedTx);
};

const test = async () => {
  const client = await StargateClient.connect(RPC_URL);
  // const test = await client.getHeight();
  // console.log(test);
  const tx = await client.getTx(
    '0BDD07E1384153578A962753CD20F8A2A187C9A9428B604F15C9C1CF27F43D8F'
  );
  console.log(tx);
};

const testOld = async () => {
  const client = await StargateClient.connect(
    'https://sei-chain-incentivized.com/sei-chain-tm/'
  );
  const tx = await client.getTx(
    '63960CBD8AA921A5ED6E54D33ED803C6599802AABB1DBB1C573CBD0CA107AB7E'
  );
  console.log(tx);
};

main();
// test();
// testOld();
