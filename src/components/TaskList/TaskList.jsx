import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import { Droppable } from 'react-beautiful-dnd';

import "./TaskList.css";
import TaskItem from '../TaskItem/TaskItem';
import Task from '../../objects/Task';
import { colorShade, rgbToHex } from '../../utils/Style';

/**
 * Displays all of the available tasks and allows CRUD operations on them
 */
const TaskList = ({ tasks }) => {
    const [currentBackgroundColorHex, setCurrentBackgroundColorHex] = useState('');
    const [formValue, setFormValue] = useState('');

    const divRef = useRef(null);

    // After the components have loaded get the background colour of the box
    useEffect(() => {
        setCurrentBackgroundColorHex(rgbToHex(getComputedStyle(divRef.current).backgroundColor))
    }, [])

    /**
    * Style of the droppable section/div
    */
    const getDroppableStyle = (isDragging) => ({
        height: '100%',
        // Lighten the background on hover
        backgroundColor: isDragging ? colorShade(currentBackgroundColorHex, -8) : currentBackgroundColorHex
    });

    /**
     * Handle form field submit
     */
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className={"task-list"} ref={divRef}>
            {/* Display a form field for task creation */}
            <div className={"task-input"}>
                <form className={"task-input-form"} noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <TextField label="Task Name" variant="outlined" fullWidth onChange={e => setFormValue(e.target.value)} />
                </form>
                <IconButton className={"task-input-icon-button"} color="primary" aria-label="Add" onClick={handleSubmit}>
                    <AddIcon />
                </IconButton>
            </div>

            {/* List all available tasks in a droppable list of task items */}
            <Droppable droppableId="taskList" >
                {(provided, snapshot) => (
                    <div ref={provided.innerRef} {...provided.droppableProps} style={getDroppableStyle(snapshot.isDraggingOver, currentBackgroundColorHex)}>
                        {tasks.map((task, index) => {
                            return <TaskItem key={task.id} task={task} index={index} />;
                        })}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.instanceOf(Task)).isRequired
}

TaskList.defaultProps = {
    tasks: []
}

export default TaskList;