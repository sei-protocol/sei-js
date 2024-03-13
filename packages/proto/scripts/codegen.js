import { join } from 'path';
import telescope from '@cosmology/telescope';
import { sync as rimraf } from 'rimraf';

const protoDirs = [join(__dirname, '/../proto')];
const outPath = join(__dirname, '../src/codegen');
rimraf(outPath);

telescope({
	protoDirs,
	outPath,
	options: {
		removeUnusedImports: true,
		interfaces: {
			//This fixes some typescript errors in the generated code when using Any type
			useUnionTypes: true
		},
		prototypes: {
			excluded: {
				packages: [
					'cosmos.app.v1alpha1',
					'cosmos.app.v1beta1',
					'cosmos.autocli.v1',
					'cosmos.authz.v1beta1',
					'cosmos.base.kv.v1beta1',
					'cosmos.base.reflection.v1beta1',
					'cosmos.base.snapshots.v1beta1',
					'cosmos.base.store.v1beta1',
					'cosmos.base.tendermint.v1beta1',
					'cosmos.capability.v1beta1',
					'cosmos.crisis.v1beta1',
					'cosmos.evidence.v1beta1',
					'cosmos.feegrant.v1beta1',
					'cosmos.genutil.v1beta1',
					'cosmos.gov.v1',
					'cosmos.group.v1',
					'cosmos.group.v1beta1',
					'cosmos.mint.v1beta1',
					'cosmos.msg.v1',
					'cosmos.nft.v1beta1',
					'cosmos.orm.v1',
					'cosmos.orm.v1alpha1',
					'cosmos.params.v1beta1',
					'cosmos.slashing.v1beta1',
					'cosmos.vesting.v1beta1',
					'google.api',
					'ibc.core.port.v1',
					'ibc.core.types.v1'
				]
			},
			enableRegistryLoader: true,
			enableMessageComposer: true,
			includePackageVar: false,
			allowUndefinedTypes: true,
			typingsFormat: {
				useTelescopeGeneratedType: true
			}
		},
		aminoEncoding: {
			enabled: true
		},
		lcdClients: {
			enabled: true
		},
		rpcClients: {
			enabled: true,
			camelCase: true
		}
	}
})
	.then(() => {
		console.log('✨ all done!');
	})
	.catch((e) => {
		console.error(e);
	});
