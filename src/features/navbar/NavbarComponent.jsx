import React from 'react'
import Typography from '@material-ui/core/Typography';

import "./NavbarComponent.css";

/**
 * Top navbar component to navigate the various 'pages'
 */
const NavbarComponent = () => {
    return (
        <div className={"navbar"}>
            <div className={"navbar-item"}>
                <Typography variant="h4">
                    To Do List
                </Typography>
            </div>
            <div className={"navbar-item"}>
                <Typography variant="h4">
                    Eisenhower Box
            </Typography>
            </div>
            <div className={"navbar-item"}>
                <Typography variant="h4">
                    Day Scheduler
                </Typography>
            </div>
        </div>
    )
}

export default NavbarComponent;