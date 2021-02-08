import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

import "./TaskItem.css";
import Task from '../../../objects/Task';

/**
 * Component to represent a task
 */
const TaskItem = ({ task, index }) => {
    return (
        // NOTE: Draggable ID must be a string not a number
        <Draggable draggableId={`draggable-task-${task.id}`} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className={"task-item"}
                >
                    {task.title}
                </div>
            )}
        </Draggable>
    )
}

TaskItem.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    index: PropTypes.number
}

TaskItem.defaultProps = {
    task: [],
    index: 0
}

export default TaskItem;