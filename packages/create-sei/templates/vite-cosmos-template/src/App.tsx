import './index.css'
import { WalletConnectButton, Homepage } from './components'

function App() {

  return (
    <>
      <div className="header">
        <WalletConnectButton/>
      </div>
      <Homepage/>
    </>
  )
}

export default App
