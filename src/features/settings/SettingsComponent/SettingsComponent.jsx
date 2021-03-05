import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';

import SettingsDialog from '../SettingsDialog/SettingsDialog';
import { setSettingsDialogOpen } from '../SettingsSlice';

/**
 * Component to control the settings state changes and open the settings dialog
 */
const SettingsComponent = () => {
    const dispatch = useDispatch();
    const dialogOpen = useSelector(state => state.settings.open);

    const onClose = () => {
        dispatch(setSettingsDialogOpen(false))
    }

    return (
        <React.Fragment>
            <IconButton className="settings-icon-button" color="primary" aria-label="Settings" onClick={() => dispatch(setSettingsDialogOpen(true))}>
                <SettingsIcon />
            </IconButton>

            <SettingsDialog open={dialogOpen} onClose={onClose}></SettingsDialog>
        </React.Fragment>
    )
}

export default SettingsComponent;