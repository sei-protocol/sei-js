import { coins, DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { calculateFee, coin } from '@cosmjs/stargate';
import {
  SeiCosmWasmClient,
  SeiSigningCosmWasmClient,
  SeiStargateClient,
} from './client';
import { SeiSigningStargateClient } from './client/seiSigningStargateClient';

// const RPC_URL = 'https://rpc.sei-devnet-2.seinetwork.io/';
const ADDR = 'sei14ae4g3422thcyuxler2ws3w25fpesrh2uqmgm9';
const RPC_URL = 'http://3.73.138.242:26657/';
const CONTRACT_ADDR =
  'sei1ufs3tlq4umljk0qfe8k5ya0x6hpavn897u2cnf9k0en9jr7qarqqfx6a4a';

const seiStargateClientTest = async () => {
  const client = await SeiStargateClient.connect(RPC_URL);

  const height = await client.getHeight();
  console.log(height);

  const account = await client.getAccount(ADDR);
  console.log(account);

  const sequence = await client.getSequence(ADDR);
  console.log(sequence);

  const block = await client.getBlock(6043337);
  console.log(block);

  const balance = await client.getBalance(ADDR, 'usei');
  console.log(balance);

  const allBalances = await client.getAllBalances(ADDR);
  console.log(allBalances);

  const balanceStaked = await client.getBalanceStaked(ADDR);
  console.log(balanceStaked);

  const tx = await client.getTx(
    '0BDD07E1384153578A962753CD20F8A2A187C9A9428B604F15C9C1CF27F43D8F'
  );
  console.log(tx);

  const searchedTx = await client.searchTx({ sentFromOrTo: ADDR });
  console.log(searchedTx);
};

const seiSigningStargateClientTest = async () => {
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
    'fish bullet unfair undo digital wisdom subject distance evidence interest range repair',
    { prefix: 'sei' }
  );
  const [account] = await wallet.getAccounts();
  const client = await SeiSigningStargateClient.connectWithSigner(
    RPC_URL,
    wallet
  );
  console.log('Client is initialized');

  // const sendMsg: MsgSendEncodeObject = {
  //   typeUrl: '/cosmos.bank.v1beta1.MsgSend',
  //   value: {
  //     fromAddress: account.address,
  //     toAddress: account.address,
  //     amount: [coin(100, 'usei')],
  //   },
  // };
  // const simulate = await client.simulate(account.address, [sendMsg], 'memo');
  // console.log(simulate);
  const amount = coin(100, 'usei');
  const fee = calculateFee(100000, '0.1usei');

  const sendResponse = await client.sendTokens(
    account.address,
    'sei1cdvr6tns50wv03ek94ds6vnxh7pl3pmm9amstu',
    [amount],
    fee
  );
  console.log(sendResponse);
};

const seiCosmWasmClientTest = async () => {
  const client = await SeiCosmWasmClient.connect(RPC_URL);
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

  // const tx = await client.getTx(
  //   '0BDD07E1384153578A962753CD20F8A2A187C9A9428B604F15C9C1CF27F43D8F'
  // );
  // console.log(tx);

  // const searchedTx = await client.searchTx({ sentFromOrTo: ADDR });
  // console.log(searchedTx);

  const contract = await client.getContract(CONTRACT_ADDR);
  console.log(contract);

  const query = {
    num_tokens: {},
  };
  const tokens = await client.queryContractSmart(CONTRACT_ADDR, query);
  console.log(tokens);
};

const seiSigningCosmWasmClient = async () => {
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
    'fish bullet unfair undo digital wisdom subject distance evidence interest range repair',
    { prefix: 'sei' }
  );
  const [account] = await wallet.getAccounts();
  const client = await SeiSigningCosmWasmClient.connectWithSigner(
    RPC_URL,
    wallet
  );
  const instruction = {
    contractAddress: CONTRACT_ADDR,
    msg: {
      mint: {
        sender: 'sei14ae4g3422thcyuxler2ws3w25fpesrh2uqmgm9',
        recipient: 'sei14ae4g3422thcyuxler2ws3w25fpesrh2uqmgm9',
      },
    },
  };
  const fee = {
    amount: coins(10000, 'usei'),
    gas: (200000).toString(),
  };
  const response = await client.executeMultiple(
    account.address,
    [instruction],
    fee
  );
  console.log(JSON.stringify(response));
};

// seiStargateClientTest();
// seiSigningStargateClientTest();
// seiCosmWasmClientTest();
seiSigningCosmWasmClient();
