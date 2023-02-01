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
exports.getSigningClient = void 0;
const proto_1 = require("@sei-js/proto");
const getSigningClient = (rpcEndpoint, signer) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, proto_1.getSigningSeiprotocolClient)({ rpcEndpoint, signer });
});
exports.getSigningClient = getSigningClient;
