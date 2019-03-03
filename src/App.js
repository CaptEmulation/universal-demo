import { setConfig } from 'react-hot-loader'
import { hot } from 'react-hot-loader/root'
import App from './components/App'

setConfig({ logLevel: 'debug' })

export default hot(App)
