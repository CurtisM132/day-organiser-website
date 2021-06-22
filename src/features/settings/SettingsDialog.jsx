import React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

/**
 * Dialog box to adjust the various settings for the website 
 * @param {boolean} open The dialog open state
 * @param {func} onClose The function called when the dialog closes 
 */
const SettingsDialog = ({open, onClose}) => {
    const handleClose = () => {
        onClose();
      };

    return (
        <Dialog aria-labelledby="Settings" open={open} onClose={handleClose}>
            <DialogTitle id="settings-dialog-title">Settings</DialogTitle>
        </Dialog>
    );
}

SettingsDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
  };
  
  SettingsDialog.defaultProps = {
    open: false,
    onClose: () => console.warn('No close function')
  };

export default SettingsDialog;