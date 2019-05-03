import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

describe('App component test', () => {
    it('<App /> renders without crashing', () => {
        shallow(<App />)
    })
})