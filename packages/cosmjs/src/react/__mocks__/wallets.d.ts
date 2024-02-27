import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { SeiWallet } from '../../wallet';
export declare const createTestWallet: (offlineSigner?: DirectSecp256k1HdWallet) => SeiWallet;
