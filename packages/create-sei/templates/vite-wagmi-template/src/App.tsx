import './index.css'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Homepage from './components/Homepage/Homepage';

function App() {

	return (
    <>
      <div className="header">
        <ConnectButton 
            showBalance={{
            smallScreen: false,
            largeScreen: true,
            }}
          />
      </div>
      <Homepage/>
    </>
	);
}

export default App;
