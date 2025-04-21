import { ethers, toUtf8Bytes } from "ethers";

import { fundAddress } from "./testUtils";
import { ConfidentialTransfers } from "../payload/confidentialTransfers";
import { applyPendingBalanceEthers, closeAccountEthers, depositEthers, initializeAccountEthers, queryAccountEthers, transferEthers, withdrawEthers, getDenomToSignEthers, decryptAccountEthers } from "../interface/ethers";

async function main() {
    // 1) Initialize an ethers provider (local chain at 8545)
    const provider = new ethers.JsonRpcProvider("http://localhost:8545");

    // 2) Create a signer - if you're using a local dev chain, 
    //    you can just use the first account it provides.
    //    Alternatively, you can load a private key or mnemonic.
    const testWallet = ethers.Wallet.createRandom().connect(provider);
    console.log(testWallet);

    // 3) Fund this new wallet from an admin/unlocked account at index 0
    await fundAddress(testWallet.address)
    
    await delay(3000)
    const fundTx = await testWallet.sendTransaction({
        to: testWallet.address,
        value: ethers.parseEther("1.0"), // 1 ETH worth of funds, adjust as needed
    });
    await fundTx.wait();

    // 4) Get the user to sign the denom
    const denom = "usei";
    const denomHash = getDenomToSignEthers(denom)

    const signedDenom = await testWallet.signMessage(denomHash);
    console.log("Signed Denom:", signedDenom);
/// INITIALIZE TEST
    // 5) Create the initialize object using the wasm library
    const api = new ConfidentialTransfers();
    await api.initialize();

    // 5) Call the precompile with your chosen inputs
    console.log("Calling precompile...");

    await initializeAccountEthers(signedDenom, testWallet.address, denom, testWallet)

    // Now try to query the account on chain:
    let account = await queryAccountEthers(testWallet.address, denom, testWallet)
    if (account == null) {
        console.log("TEST FAILED: Unexpected Error: Could not query account")
        return
    }

    console.log("Account on chain:", account)

/// DEPOSIT TEST
    const depositAmount = 100000
    await depositEthers(denom, depositAmount, testWallet)
    account = await queryAccountEthers(testWallet.address, denom, testWallet)
    if (account == null) {
        console.log("TEST FAILED: Unexpected Error: Could not query account")
        return
    }
    console.log("Account on chain:", account)

/// APPLY PENDING BALANCE TEST
    let decryptedAccount = await decryptAccountEthers(signedDenom, account, false);
    console.log("Decrypted Before", decryptedAccount);
    await applyPendingBalanceEthers(testWallet.address, denom, signedDenom, testWallet)
    account = await queryAccountEthers(testWallet.address, denom, testWallet)
    if (account == null) {
        console.log("TEST FAILED: Unexpected Error: Could not query account")
        return
    }
    console.log("Account on chain:", account)
    decryptedAccount = await decryptAccountEthers(signedDenom, account, false);
    console.log("Decrypted After", decryptedAccount);

/// WITHDRAW TEST
    const withdrawAmount = 10000
    await withdrawEthers(testWallet.address, denom, withdrawAmount, signedDenom, testWallet)

    account = await queryAccountEthers(testWallet.address, denom, testWallet)
    if (account == null) {
        console.log("TEST FAILED: Unexpected Error: Could not query account")
        return
    }
    console.log("Account on chain:", account)

// Transfer Test
    // Setup second wallet.
    // Create another signer 
    const otherWallet = ethers.Wallet.createRandom().connect(provider);
    console.log(otherWallet);

    // Fund this new wallet from an admin/unlocked account at index 0
    const fundOtherResult = await fundAddress(otherWallet.address)
    
    await delay(3000)
    const fundOtherTx = await otherWallet.sendTransaction({
        to: otherWallet.address,
        value: ethers.parseEther("1.0"), // 1 ETH worth of funds, adjust as needed
    });
    await fundOtherTx.wait();

    // Sign the denom with the second wallet
    const othersignedDenom = await otherWallet.signMessage(denomHash);

    await initializeAccountEthers(othersignedDenom, otherWallet.address, denom, otherWallet)

    let otherAccount = await queryAccountEthers(otherWallet.address, denom, testWallet)
    if (otherAccount == null) {
        console.log("TEST FAILED: Unexpected Error: Could not query account")
        return
    }
    
    console.log("OtherAccount on chain:", otherAccount)

    await transferEthers(testWallet.address, otherWallet.address, denom, depositAmount-withdrawAmount, signedDenom, testWallet)

    otherAccount = await queryAccountEthers(otherWallet.address, denom, testWallet)
    if (otherAccount == null) {
        console.log("TEST FAILED: Unexpected Error: Could not query account")
        return
    }

    console.log("OtherAccount on chain:", otherAccount)

    account = await queryAccountEthers(testWallet.address, denom, testWallet)
    if (account == null) {
        console.log("TEST FAILED: Unexpected Error: Could not query account")
        return
    }

    console.log("Account on chain:", account)

// CloseAccount Test
    await closeAccountEthers(testWallet.address, denom, signedDenom, testWallet)

    account = await queryAccountEthers(testWallet.address, denom, testWallet)
    if (account != null) {
        console.log("Test Failed: Account should have been closed.")
        return
    }
}

main().catch((err) => {
    console.error("Error:", err);
    process.exit(1);
});

function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}