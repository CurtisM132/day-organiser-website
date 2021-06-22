import React from 'react';
import { useDispatch } from 'react-redux';
import { Drawer, Toolbar, ListSubheader, List, Divider } from '@material-ui/core';
import FormatListNumberedRtlIcon from '@material-ui/icons/FormatListNumberedRtl';
import ListAltIcon from '@material-ui/icons/ListAlt';

import './Sidebar.css'
import ListItemLink from '@components/ListItemLink';
import { PageEnum, setCurrentPage } from './sidebarSlice';


/**
 * Sidebar component containing router links to all of the important website features
 */
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
                <ListItemLink icon={<FormatListNumberedRtlIcon />} primary="To Do List" to="/todo-list" click={() => dispatch(setCurrentPage(PageEnum.TODO))}></ListItemLink>
                <ListItemLink icon={<ListAltIcon />} primary="Eisenhower Box" to="/eisenhower-box" click={() => dispatch(setCurrentPage(PageEnum.EISENHOWER_BOX))}></ListItemLink>
            </List>
            <Divider />

            <List subheader={
                <ListSubheader component="div">
                    Scheduler
                </ListSubheader>
            }>
                <ListItemLink icon={<FormatListNumberedRtlIcon />} primary="Day Scheduler" to="/scheduler/day" click={() => dispatch(setCurrentPage(PageEnum.DAY_SCHEDULER))}></ListItemLink>
                <ListItemLink icon={<FormatListNumberedRtlIcon />} primary="Week Scheduler" to="/scheduler/week" click={() => dispatch(setCurrentPage(PageEnum.WEEK_SCHEDULER))}></ListItemLink>
                <ListItemLink icon={<FormatListNumberedRtlIcon />} primary="Month Scheduler" to="/scheduler/month" click={() => dispatch(setCurrentPage(PageEnum.MONTH_SCHEDULER))}></ListItemLink>
            </List>
            <Divider />

            <List subheader={
                <ListSubheader component="div">
                    Learning
                </ListSubheader>
            }>
                <ListItemLink icon={<FormatListNumberedRtlIcon />} primary="Spaced Repetition" to="/spaced-repetition"></ListItemLink>
            </List>
            <Divider />

            <List subheader={
                <ListSubheader component="div">
                    Other
                </ListSubheader>
            }>
                <ListItemLink icon={<FormatListNumberedRtlIcon />} primary="Scratch Pad" to="/scratch-pad"></ListItemLink>
            </List>
        </Drawer>
    );
}

export default Sidebar;