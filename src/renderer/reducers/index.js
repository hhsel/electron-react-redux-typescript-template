import { combineReducers } from 'redux'
import * as actions from '@actions'

const counter = (state = { count: 0, operations: 0 }, action) => {
    switch (action.type) {
    case actions.COUNTER_COUNT_INCREMENT:
        return { ...state, count: state.count + 1, operations: state.operations + 1 }
    case actions.COUNTER_COUNT_DECREMENT:
        return { ...state, count: state.count - 1, operations: state.operations + 1 }
    default:
        return state
    }
}

export default combineReducers({
    counter,
})
