import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from '../../dist/react-redux'

const store = createStore((state = { count: 1 }, action) => state)

class App extends React.Component {
  render() {
    return <h1>React-redux</h1>
  }
}

ReactDOM.render(
  <Provider >
    <App />
  </Provider>,
  document.getElementById('root')
)
