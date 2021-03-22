import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Divider from '@material-ui/core/Divider';
import ListItemLink from '../ListItemLink';
import { useDispatch } from 'react-redux';

import './Sidebar.css'
import { PageEnum, setCurrentPage } from '../SidebarSlice';

const Sidebar = () => {
    const dispatch = useDispatch();

    return (
        <Drawer variant="permanent">
            {/* Needed for adding top padding so the sidebar appears normally when behind the actual navbar/toolbar */}
            <Toolbar />

            <List subheader={
                <ListSubheader component="div">
                    Tasks
                </ListSubheader>
            }>
                <ListItemLink icon={<FormatListNumberedIcon />} primary="To Do List" to="/todo-list" click={() => dispatch(setCurrentPage(PageEnum.TODO))}></ListItemLink>
                <ListItemLink icon={<ListAltIcon />} primary="Eisenhower Box" to="/eisenhower-box" click={() => dispatch(setCurrentPage(PageEnum.EISENHOWER_BOX))}></ListItemLink>
            </List>
            <Divider />

            <List subheader={
                <ListSubheader component="div">
                    Scheduler
                </ListSubheader>
            }>
                <ListItemLink icon={<FormatListNumberedIcon />} primary="Day Scheduler" to="/scheduler/day" click={() => dispatch(setCurrentPage(PageEnum.DAY_SCHEDULER))}></ListItemLink>
                <ListItemLink icon={<FormatListNumberedIcon />} primary="Week Scheduler" to="/scheduler/week" click={() => dispatch(setCurrentPage(PageEnum.WEEK_SCHEDULER))}></ListItemLink>
                <ListItemLink icon={<FormatListNumberedIcon />} primary="Month Scheduler" to="/scheduler/month" click={() => dispatch(setCurrentPage(PageEnum.MONTH_SCHEDULER))}></ListItemLink>
            </List>
            <Divider />

            <List subheader={
                <ListSubheader component="div">
                    Learning
                </ListSubheader>
            }>
                <ListItemLink icon={<FormatListNumberedIcon />} primary="Spaced Repetition" to="/spaced-repetition"></ListItemLink>
            </List>
            <Divider />

            <List subheader={
                <ListSubheader component="div">
                    Other
                </ListSubheader>
            }>
                <ListItemLink icon={<FormatListNumberedIcon />} primary="Scratch Pad" to="/scratch-pad"></ListItemLink>
            </List>
        </Drawer>
    );
}

export default Sidebar;