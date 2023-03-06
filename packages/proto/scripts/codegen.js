import { join } from 'path';
import telescope from '@osmonauts/telescope';
import { sync as rimraf } from 'rimraf';

const protoDirs = [join(__dirname, '/../proto')];
const outPath = join(__dirname, '../src/codegen');
rimraf(outPath);

telescope({
  protoDirs,
  outPath,
  options: {
    prototypes: {
      includePackageVar: false,
      typingsFormat: {
        useExact: false,
        timestamp: 'date',
        duration: 'duration',
      },
    },
    aminoEncoding: {
      enabled: true,
    },
    lcdClients: {
      enabled: true,
    },
    rpcClients: {
      enabled: false,
      camelCase: true,
    },
  },
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
  });
