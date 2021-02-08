import React, { useState } from 'react';
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';

import './TaskInput.css';

/**
 * Component to create a new task
 * @param {Function} addTask Call to add a new task 
 */
const TaskInput = ({ addTask }) => {
    const [formValue, setFormValue] = useState('');

    /**
     * Handle form field submit
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        addTask(formValue);
    }

    return (
        // Display a form field for task creation
        <div className={"task-input"}>
            <form className={"task-input-form"} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField label="Task Name" variant="outlined" fullWidth onChange={e => setFormValue(e.target.value)} />
            </form>
            <IconButton className={"task-input-icon-button"} color="primary" aria-label="Add" onClick={handleSubmit}>
                <AddIcon />
            </IconButton>
        </div>
    );
}

TaskInput.propTypes = {
    addTask: PropTypes.func.isRequired
}

TaskInput.defaultProps = {
    addTask: () => console.log('No function passed in')
}

export default TaskInput;