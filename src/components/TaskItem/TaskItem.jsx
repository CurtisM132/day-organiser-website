import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

import "./TaskItem.css";
import Task from '../../objects/Task';

/**
 * Component to represent a task
 */
export default class TaskItem extends React.Component {
    static propTypes = {
        task: PropTypes.instanceOf(Task).isRequired,
        index: PropTypes.number
    }

    static defaultProps = {
        task: [],
        index: 0
    }

    render() {
        const { task, index } = this.props;

        return (
            // NOTE: Draggable ID must be a string not a number
            <Draggable draggableId={`draggable-task-${task.id}`} index={index}>
                {(provided, snapshot) => (
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
}