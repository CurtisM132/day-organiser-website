import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import { Droppable } from 'react-beautiful-dnd';

import "./TaskList.css";
import TaskItem from '../TaskItem/TaskItem';
import Task from '../../objects/Task';
import { colorShade, rgbToHex } from '../../utilities/Style';

/**
 * Displays all of the available tasks and allows CRUD operations on them
 */
export default class TaskList extends React.Component {
    constructor(props) {
        super(props)

        this.state = { currentBackgroundColorHex: '' };

        this.divRef = React.createRef();
    }

    static propTypes = {
        tasks: PropTypes.arrayOf(PropTypes.instanceOf(Task)).isRequired
    }

    static defaultProps = {
        tasks: []
    }

    /**
     * After the components have loaded get the background colour of the box
     */
    componentDidMount() {
        const styles = getComputedStyle(this.divRef.current)
        this.setState({ currentBackgroundColorHex: rgbToHex(styles.backgroundColor) });
    }

    /**
     * Style of the droppable section/div
     */
    getDroppableStyle = (isDragging) => ({
        height: '100%',
        // Lighten the background on hover
        backgroundColor: isDragging ? colorShade(this.state.currentBackgroundColorHex, -8) : this.state.currentBackgroundColorHex
    });

    /**
     * Handle form field text change
     */
    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    /**
     * Handle form field submit
     */
    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        const { tasks } = this.props;

        return (
            <div className={"task-list"} ref={this.divRef}>
                {/* Display a form field for task creation */}
                <div className={"task-input"}>
                    <form className={"task-input-form"} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                        <TextField label="Task Name" variant="outlined" fullWidth onChange={this.handleChange} />
                    </form>
                    <IconButton className={"task-input-icon-button"} color="primary" aria-label="Add" onClick={this.handleSubmit}>
                        <AddIcon />
                    </IconButton>
                </div>

                {/* List all available tasks in a droppable list of task items */}
                <Droppable droppableId="taskList" >
                    {(provided, snapshot) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} style={this.getDroppableStyle(snapshot.isDraggingOver)}>
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
}