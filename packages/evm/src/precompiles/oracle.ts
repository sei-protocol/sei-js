/**
 * The address of the Oracle precompile contract.
 * @category Cosmos Interoperability
 */
export const ORACLE_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001002';

/**
 * The ABI for the Oracle precompile contract.
 * @category Cosmos Interoperability
 */
export const ORACLE_PRECOMPILE_ABI = [
	{
		inputs: [],
		name: 'getExchangeRates',
		outputs: [
			{
				components: [
					{ internalType: 'string', name: 'denom', type: 'string' },
					{
						components: [
							{ internalType: 'string', name: 'exchangeRate', type: 'string' },
							{ internalType: 'string', name: 'lastUpdate', type: 'string' },
							{ internalType: 'int64', name: 'lastUpdateTimestamp', type: 'int64' }
						],
						internalType: 'struct IOracle.OracleExchangeRate',
						name: 'oracleExchangeRateVal',
						type: 'tuple'
					}
				],
				internalType: 'struct IOracle.DenomOracleExchangeRatePair[]',
				name: '',
				type: 'tuple[]'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint64', name: 'lookback_seconds', type: 'uint64' }],
		name: 'getOracleTwaps',
		outputs: [
			{
				components: [
					{ internalType: 'string', name: 'denom', type: 'string' },
					{ internalType: 'string', name: 'twap', type: 'string' },
					{ internalType: 'int64', name: 'lookbackSeconds', type: 'int64' }
				],
				internalType: 'struct IOracle.OracleTwap[]',
				name: '',
				type: 'tuple[]'
			}
		],
		stateMutability: 'view',
		type: 'function'
	}
] as const;
