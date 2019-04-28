import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const Component = () => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
                My Awesome Electron Application
            </Typography>
            <Button component={Link} to="/" color="inherit">Home</Button>
            <Button component={Link} to="/about/" color="inherit">About</Button>
        </Toolbar>
    </AppBar>
)


export default Component
