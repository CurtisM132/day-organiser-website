import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';

import SettingsDialog from './SettingsDialog';
import { setSettingsDialogOpen } from './settingsSlice';

/**
 * Component to control the settings state changes and open the settings dialog
 */
const SettingsController = () => {
    const dispatch = useDispatch();
    const dialogOpen = useSelector(state => state.settings.open);

    const onClose = () => {
        dispatch(setSettingsDialogOpen(false))
    }

    return (
        <Fragment>
            <IconButton className="settings-icon-button" aria-label="Settings" onClick={() => dispatch(setSettingsDialogOpen(true))}>
                <SettingsIcon />
            </IconButton>

            <SettingsDialog open={dialogOpen} onClose={onClose}></SettingsDialog>
        </Fragment>
    )
}

export default SettingsController;