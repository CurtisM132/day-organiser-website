import React from 'react';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import { Droppable } from 'react-beautiful-dnd';

import "./TaskList.css";

import TaskItem from '../TaskItem/TaskItem';

const getDroppableStyle = isDraggingOver => ({
    // TODO: Pick a better hover colour
    background: isDraggingOver ? 'lightblue' : '',
    height: '100%'
});

export default class TaskList extends React.Component {
    render() {
        // TODO: Remove dummy data
        const elements = [{ id: 0, name: 'Example Task 1' }, { id: 1, name: 'Example Task 2' }, { id: 2, name: 'Example Task 3' }];

        return (
            <div className={"task-list"}>
                <div className={"task-input"}>
                    <form className={"task-input-form"} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                        <TextField label="Task Name" variant="outlined" fullWidth onChange={this.handleChange} />
                    </form>
                    <IconButton className={"task-input-icon-button"} color="primary" aria-label="Add" onClick={this.handleSubmit}>
                        <AddIcon />
                    </IconButton>
                </div>

                <Droppable droppableId="taskList" >
                    {(provided, snapshot) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} style={getDroppableStyle(snapshot.isDraggingOver)}>
                            {elements.map((task, index) => {
                                return <TaskItem key={task.id} task={task} index={index} />;
                            })}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        );
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }
}