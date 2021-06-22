import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import { useTheme } from '@material-ui/core/styles';

import './TaskList.css';
import Task from '@objects/Task';
import TaskItem from '../TaskItem/TaskItem';

const propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.instanceOf(Task)).isRequired,
  droppableId: PropTypes.number.isRequired,
};

/**
 * Displays all of the available tasks and allows CRUD operations on them
 */
const TaskList = ({ tasks, droppableId }) => {
  const theme = useTheme();

  /**
    * Style of the droppable section/div
    */
  const getDroppableStyle = (isDragging) => ({
    height: '100%',
    padding: '8px',
    backgroundColor: isDragging ? theme.palette.grey[700] : theme.palette.grey[800],
  });

  return (
  /* List all available tasks in a droppable list of task items */
    <Droppable droppableId={droppableId}>
      {(provided, snapshot) => (
        <div ref={provided.innerRef} {...provided.droppableProps} style={getDroppableStyle(snapshot.isDraggingOver)}>
          {tasks.map((task, index) => <TaskItem key={task.id} task={task} index={index} />)}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

TaskList.propTypes = propTypes;

export default TaskList;
