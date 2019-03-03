import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import App from './App'

const history = createHistory()
const render = AppRoot => ReactDOM.hydrate(
  <AppRoot history={history} />,
  document.getElementById('root')
)

render(App)
