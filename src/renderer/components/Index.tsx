import React from 'react'
import Button from '@material-ui/core/Button'
import {
    CounterActionTypes,
} from '@actions'

interface IPropsIndexPage {
    count: number
    operations: number
    incrementCount(): CounterActionTypes
    decrementCount(): CounterActionTypes
}

const Component = (props: IPropsIndexPage) => {
    const { incrementCount, decrementCount } = props
    const { count, operations } = props
    return (
        <div>
            <h1>{`Count: ${count}`}</h1>
            <h2>{`Click Count: ${operations}`}</h2>
            <Button onClick={incrementCount} variant="contained" color="primary">
                Increment
            </Button>
            <Button onClick={decrementCount} variant="contained" color="secondary">
                <div>Decrement</div>
            </Button>
        </div>
    )
}

export default Component
