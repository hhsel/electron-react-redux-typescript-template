import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

// See the link below to know why Link is not directly specified in component attribute, which can be done in JS.
// https://stackoverflow.com/questions/53375964/using-a-link-component-with-listitem-and-typescript
const Component = () => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
                My Awesome Electron Application
            </Typography>
            <Button component={(props) => <Link to="/" {...props} />} color="inherit">
                Home
            </Button>
            <Button component={(props) => <Link to="/about/" {...props} />} color="inherit">
                About
            </Button>
        </Toolbar>
    </AppBar>
)

export default Component
