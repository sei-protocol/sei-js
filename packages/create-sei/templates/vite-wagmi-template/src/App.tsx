import './App.css'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Homepage from './components/Homepage/Homepage';

function App() {

	return (
    <div className='app-container'>
      <div className='header'>
        <ConnectButton 
            showBalance={{
            smallScreen: false,
            largeScreen: true,
            }}
          />
      </div>
      <Homepage/>
    </div>
	);
}

export default App;
