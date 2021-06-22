import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import SettingsController from '@features/Settings/SettingsController';
import "./Navbar.css";


/**
 * Navbar component which sits at the top of the page.
 * Contains the page title, settings button, and user management button.
 */
const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="h4">
                    TBC
                </Typography>

                <div className="navbar-icon-container">
                    <SettingsController />
                </div>

                {/* TODO: Split out into user management feature */}
                <AccountCircleIcon></AccountCircleIcon>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;