import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

import "./TaskItem.css";

export default class TaskItem extends React.Component {
    static propTypes = {
        // TODO: Create interface file and import
        // task: PropTypes.instanceOf(
        task: PropTypes.object.isRequired,
        index: PropTypes.number
    }

    static defaultProps = {
        task: {
            id: 0,
            name: ""
        },
        index: 0
    }

    render() {
        const {
            task,
            index
        } = this.props;

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
                        {task.name}
                    </div>
                )}
            </Draggable>
        )
    }
}