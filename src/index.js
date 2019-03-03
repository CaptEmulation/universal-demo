import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import App from './App'

const history = createHistory()
const render = AppRoot => ReactDOM.render(
  <AppRoot history={history} />,
  document.getElementById('root')
)

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./components/App', () => {
    render(require('./components/App').default) // eslint-ignore-line
  })
}

render(App)
