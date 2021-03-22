import React from 'react';
import PropTypes from 'prop-types'

import TaskList from '../../tasks/TaskList/TaskList';
import Task from '../../../objects/Task';

const propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.instanceOf(Task)).isRequired,
}

/**
 * The top level container component for the Todo List feature
 * @param {Array} tasks The tasks to display in the list 
 */
const TodoListContainer = ({tasks}) => {
    return (
        <div>
            <TaskList tasks={tasks} droppableId="todoList" />
        </div>
    );
}

TodoListContainer.propTypes = propTypes;

export default TodoListContainer;