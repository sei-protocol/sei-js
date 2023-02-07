import { SeiStargateClient } from './seiStargateClient';
import { StargateClient } from '@cosmjs/stargate';

// const RPC_URL = 'https://rpc.sei-devnet-2.seinetwork.io/';
const RPC_URL = 'http://3.73.138.242:26657/';

const main = async () => {
  const client = await SeiStargateClient.connect(RPC_URL);
  // const test = await client.getHeight();
  // console.log(test);
  const tx = await client.getTx(
    '0BDD07E1384153578A962753CD20F8A2A187C9A9428B604F15C9C1CF27F43D8F'
  );
  console.log(tx);
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
