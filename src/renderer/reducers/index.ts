import { combineReducers } from 'redux'
import {
    CounterActionTypes,
    COUNTER_COUNT_DECREMENT,
    COUNTER_COUNT_INCREMENT,
} from '@actions'

export interface ICounterState {
    count: number
    operations: number
}

const initialCounterState: ICounterState = {
    count: 0,
    operations: 0,
}

const counter = (
    state = initialCounterState,
    action: CounterActionTypes,
): ICounterState => {
    switch (action.type) {
        case COUNTER_COUNT_INCREMENT:
            return { ...state, count: state.count + 1, operations: state.operations + 1 }
        case COUNTER_COUNT_DECREMENT:
            return { ...state, count: state.count - 1, operations: state.operations + 1 }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    counter,
})
export default rootReducer
export type AppState = ReturnType<typeof rootReducer>
