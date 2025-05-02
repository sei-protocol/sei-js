import { Ciphertext } from "@sei-js/cosmos/types/confidentialtransfers";
import { Encoder } from '@sei-js/cosmos/encoding';

export function base64ToBytes(b64: string): Uint8Array {
  if (typeof atob === "function") {
    // Browser environment
    const binary = atob(b64);
    const arr = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      arr[i] = binary.charCodeAt(i);
    }
    return arr;
  } else {
    // Node environment
    return Uint8Array.from(Buffer.from(b64, "base64"));
  }
}

export function base64FromBytes(arr: Uint8Array): string {
    if ((globalThis as any).Buffer) {
      return globalThis.Buffer.from(arr).toString("base64");
    } else {
      const bin: string[] = [];
      arr.forEach((byte) => {
        bin.push(globalThis.String.fromCharCode(byte));
      });
      return globalThis.btoa(bin.join(""));
    }
  }

export function marshalAndEncodeCiphertext(ciphertext: Ciphertext): string {
  const encodedCiphertext = Encoder.confidentialtransfers.Ciphertext.encode(ciphertext).finish()
  return base64FromBytes(encodedCiphertext)
}

