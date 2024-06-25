import './App.css'
import { WalletConnectButton, Homepage } from './components'

function App() {

  return (
    <div className='app-container'>
      <div className='header'>
        <WalletConnectButton/>
      </div>
      <Homepage/>
    </div>
  )
}

export default App
