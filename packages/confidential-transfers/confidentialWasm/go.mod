module confidentialWasm

go 1.22

toolchain go1.23.4

replace (
	github.com/CosmWasm/wasmd => github.com/sei-protocol/sei-wasmd v0.3.0
	github.com/CosmWasm/wasmvm => github.com/sei-protocol/sei-wasmvm v1.5.4-sei.0.0.1
	github.com/coinbase/kryptology => github.com/sei-protocol/coinbase-kryptology v0.0.0-20241210171554-278d19024e41
	github.com/confio/ics23/go => github.com/cosmos/cosmos-sdk/ics23/go v0.8.0
	github.com/cosmos/cosmos-sdk => github.com/sei-protocol/sei-cosmos v0.3.49
	github.com/cosmos/iavl => github.com/sei-protocol/sei-iavl v0.2.0
	github.com/cosmos/ibc-go/v3 => github.com/sei-protocol/sei-ibc-go/v3 v3.3.3
	github.com/ethereum/go-ethereum => github.com/sei-protocol/go-ethereum v1.13.5-sei-9.0.20241126162048-86648c51118c
	github.com/gogo/protobuf => github.com/regen-network/protobuf v1.3.3-alpha.regen.1
	github.com/sei-protocol/sei-db => github.com/sei-protocol/sei-db v0.0.46
	// Latest goleveldb is broken, we have to stick to this version
	github.com/syndtr/goleveldb => github.com/syndtr/goleveldb v1.0.1-0.20210819022825-2ae1ddf74ef7
	github.com/tendermint/tendermint => github.com/sei-protocol/sei-tendermint v0.4.3
	github.com/tendermint/tm-db => github.com/sei-protocol/tm-db v0.0.4
	google.golang.org/grpc => google.golang.org/grpc v1.33.2
)

require (
	github.com/coinbase/kryptology v1.8.0
	github.com/gogo/protobuf v1.3.3
	github.com/sei-protocol/sei-cryptography v0.0.0-20250415200957-b4877e8cee96
)

require (
	filippo.io/edwards25519 v1.1.0 // indirect
	github.com/btcsuite/btcd/btcec/v2 v2.3.4 // indirect
	github.com/bwesterb/go-ristretto v1.2.3 // indirect
	github.com/decred/dcrd/dcrec/secp256k1/v4 v4.2.0 // indirect
	github.com/gtank/merlin v0.1.1 // indirect
	github.com/mimoo/StrobeGo v0.0.0-20210601165009-122bf33a46e0 // indirect
	github.com/pkg/errors v0.9.1 // indirect
	golang.org/x/crypto v0.31.0 // indirect
	golang.org/x/sys v0.28.0 // indirect
)
