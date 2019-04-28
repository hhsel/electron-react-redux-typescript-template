import React from 'react'
import AppBar from '@components/AppBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from '@containers/Index'
import About from '@components/About'

export default () => (
    <Router>
        <AppBar />
        <Switch>
            <Route path="/about/" component={About} />
            <Route path="*" component={Index} />
        </Switch>
    </Router>
)
