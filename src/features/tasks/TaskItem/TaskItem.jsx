import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import Box from '@material-ui/core/Box';

import './TaskItem.css';
import Task from '@objects/Task';

/**
 * Component to represent a task
 */
const TaskItem = ({ task, index }) => (
  // NOTE: Draggable ID must be a string not a number
  <Draggable draggableId={`draggable-task-${task.id}`} index={index}>
    {(provided) => (
      <Box
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        className="task-item"
        bgcolor="background.paper"
      >
        {task.title}
      </Box>
    )}
  </Draggable>
);

TaskItem.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  index: PropTypes.number.isRequired,
};

export default TaskItem;
