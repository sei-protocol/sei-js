import { exec } from "child_process";

export async function fundAddress(addr: string, amount="1000000000000000000000000") {
    const result = await evmSend(addr, "admin", amount)
    return result
}

export async function evmSend(addr: string, fromKey: string, amount="10000000000000000000000000") {
    const output = await execCommand(`seid tx evm send ${addr} ${amount} --from ${fromKey} -b block -y`);
    return output.replace(/.*0x/, "0x").trim()
}

async function execCommand(command: string): Promise<string> {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(error);
                return;
            }
            if (stderr) {
                reject(new Error(stderr));
                return;
            }
            resolve(stdout);
        });
    })
}