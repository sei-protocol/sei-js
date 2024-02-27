import { useContext } from 'react';
import { SeiWalletContext } from '../../provider';

/**
 * A hook allows you to programmatically open and close the wallet modal.
 * @returns Setter functions that allow you to open and close the wallet modal.
 */
const useSelectWallet = () => {
	const { setShowConnectModal } = useContext(SeiWalletContext);

	const openModal = () => setShowConnectModal(true);

	const closeModal = () => setShowConnectModal(false);

	return { openModal, closeModal };
};

export default useSelectWallet;
