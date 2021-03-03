import React from 'react'
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';

import "./NavbarComponent.css";
import {setCurrentPage, PageEnum} from './navbarSlice';

/**
 * Top navbar component to navigate the various 'pages'
 */
const NavbarComponent = () => {
    const dispatch = useDispatch();

    return (
        <div className={"navbar"}>
            <div className={"navbar-item"} onClick={() => dispatch(setCurrentPage(PageEnum.TODO))}>
                <Typography variant="h4">
                    To Do List
                </Typography>
            </div>
            <div className={"navbar-item"} onClick={() => dispatch(setCurrentPage(PageEnum.EISENHOWER_BOX))}>
                <Typography variant="h4">
                    Eisenhower Box
            </Typography>
            </div>
            <div className={"navbar-item"} onClick={() => dispatch(setCurrentPage(PageEnum.DAY_SCHEDULER))}>
                <Typography variant="h4">
                    Day Scheduler
                </Typography>
            </div>
            <div className={"navbar-item"} onClick={() => dispatch(setCurrentPage(PageEnum.WEEK_SCHEDULER))}>
                <Typography variant="h4">
                    Week Scheduler
                </Typography>
            </div>
        </div>
    )
}

export default NavbarComponent;