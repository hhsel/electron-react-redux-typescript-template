import React from 'react'
import ReactDOM from 'react-dom'
import App from '@components/App'
import store from '@stores'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement,
)
