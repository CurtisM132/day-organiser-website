import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';

import "./TaskList.css";
import TaskItem from '../TaskItem/TaskItem';
import TaskInput from '../TaskInput/TaskInput';
import Task from '../../../objects/Task';
import { colorShade, rgbToHex } from '../../../utils/Style';

/**
 * Displays all of the available tasks and allows CRUD operations on them
 */
const TaskList = ({ tasks }) => {
    const [currentBackgroundColorHex, setCurrentBackgroundColorHex] = useState('');

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

    function addTask(taskTitle) {
        // TODO
        // Validate
        // Call api to add task
        // Add to task list
        // If successful keep
        // If failed display snack bar with retry button
    }

    return (
        <div className={"task-list"} ref={divRef}>
            {/* Display a form field for task creation */}
            <TaskInput addTask={addTask} />

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