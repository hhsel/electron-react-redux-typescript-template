export const COUNTER_COUNT_INCREMENT = 'COUNTER_COUNT_INCREMENT'
export const COUNTER_COUNT_DECREMENT = 'COUNTER_COUNT_DECREMENT'

interface IActionIncrementCount {
    type: typeof COUNTER_COUNT_INCREMENT,
}
interface IActionDecrementCount {
    type: typeof COUNTER_COUNT_DECREMENT,
}

export type CounterActionTypes = IActionIncrementCount | IActionDecrementCount

export const incrementCount = (): IActionIncrementCount => {
    return {
        type: COUNTER_COUNT_INCREMENT,
    }
}

export const decrementCount = (): IActionDecrementCount => {
    return {
        type: COUNTER_COUNT_DECREMENT,
    }
}
