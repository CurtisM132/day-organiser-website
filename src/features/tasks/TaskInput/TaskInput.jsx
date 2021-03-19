import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';

import './TaskInput.css';

/**
 * Component to display the controls to create a new task
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
  };

  return (
  // Display a form field for task creation
    <Box className="task-input" bgcolor="background.paper">
      <form className="task-input-form" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField label="Task Name" variant="outlined" fullWidth onChange={(e) => setFormValue(e.target.value)} />
      </form>
      <IconButton className="task-input-icon-button" aria-label="Add" onClick={handleSubmit}>
        <AddIcon />
      </IconButton>
    </Box>
  );
};

TaskInput.propTypes = {
  addTask: PropTypes.func.isRequired,
};

TaskInput.defaultProps = {
  addTask: () => console.log('No function passed in'),
};

export default TaskInput;
