import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';

import SettingsController from '../Settings/SettingsController';
import "./Navbar.css";


/**
 * Top navbar component
 */
const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="h4">
                    Bitch (TBC)
                </Typography>

                {/* TODO: Add account manager icon */}

                <div className="navbar-icon-container">
                    <SettingsController />
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;