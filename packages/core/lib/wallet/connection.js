"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const config_1 = require("./config");
const connect = (inputWallet, chainId, restUrl, rpcUrl) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const windowKey = inputWallet === 'coin98' ? 'keplr' : inputWallet;
        if (typeof window === 'undefined' || !window)
            return;
        // Enable wallet before attempting to call any methods
        yield window[windowKey].enable(chainId);
        if (inputWallet === 'keplr') {
            yield window.keplr.experimentalSuggestChain((0, config_1.getChainSuggest)(chainId, restUrl, rpcUrl));
        }
        const offlineSigner = yield window[windowKey].getOfflineSigner(chainId);
        const accounts = yield offlineSigner.getAccounts();
        return { offlineSigner, accounts };
    }
    catch (e) {
        console.log('err', e);
    }
});
exports.connect = connect;
