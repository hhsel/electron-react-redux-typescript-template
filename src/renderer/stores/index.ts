import rootReducer from '@reducers'
import { createStore } from 'redux'

/* eslint-disable no-underscore-dangle */
const store = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
)
/* eslint-enable */

export default store
