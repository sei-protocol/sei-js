const snapMock: any = {
	success: {
		request: async (params: any) => {
			if (params.method === 'snap_getBip44Entropy') {
				return {
					depth: 2,
					masterFingerprint: undefined,
					parentFingerprint: 2468935928,
					index: 2147483766,
					privateKey: '0x0ca350a5d50a08caf95d0922d3adf4117a1ea5b7c24b7c6021173c8d46eceb37',
					// privateKey: '0x44133f8f7d34675d124d92e36e47db49e6215fbb8646fc312244c8a3a1f6a72c',
					publicKey: '0x0405794d2d33a8a8c7e21caa891a9cb5b4539fb4c2fb50e46b326b322474ce719763ca0a0c869a87640289ebe4a2c008822059bbf7564129bafe51676abc53b921',
					// publicKey: '0x049f0169d33aa6883b665977b9690fd522f9ece60038b62927f5fa8eee57f635df47917d485e81dd9b2ced6492fe6aecafcb24bea4d5f19d1f2bda96a7aa689caa',
					chainCode: '0x2926cad8569cf1a9c2757802ea3426bf4260ad52cc13c47cd45ec146031a43bb',
					// chainCode: '0x4f1b7bb9be0c61c6a4d6de78841e2c1d96d9e4b4e2f729d5013854e6d2e1cc0c',
					coin_type: 118,
					path: "m / bip32:44' / bip32:118'"
				};
			}

			if (params.method === 'snap_dialog') {
				return true;
			}

			if (params.method === 'snap_manageState') {
				if (params.operation === 'get') {
					return Promise.resolve({});
				}

				if (params.operation === 'update') {
					return Promise.resolve({});
				}
			}
			return false;
		}
	}
};

export default snapMock;
