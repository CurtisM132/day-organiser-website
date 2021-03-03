import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';

import './TaskList.css';
import TaskItem from '../TaskItem/TaskItem';
import TaskInput from '../TaskInput/TaskInput';
import Task from '../../../objects/Task';
import { colorShade, rgbToHex } from '../../../utils/Style';

/**
 * Displays all of the available tasks and allows CRUD operations on them
 */
const TaskList = ({ tasks }) => {
  const [currentBackgroundColorHex, setCurrentBackgroundColorHex] = useState('');

  // After the components have loaded get the background colour of the box
  // TODO: Implement theme with redux
  // useEffect(() => {
  //     setCurrentBackgroundColorHex(rgbToHex(getComputedStyle(divRef.current).backgroundColor))
  // }, [])

  /**
    * Style of the droppable section/div
    */
  const getDroppableStyle = (isDragging) => ({
    height: '100%',
    // Lighten the background on hover
    // backgroundColor: isDragging ? colorShade(currentBackgroundColorHex, -8) : currentBackgroundColorHex
    backgroundColor: isDragging ? 'green' : 'blue',
  });

  return (
  /* List all available tasks in a droppable list of task items */
    <Droppable droppableId="taskList">
      {(provided, snapshot) => (
        <div ref={provided.innerRef} {...provided.droppableProps} style={getDroppableStyle(snapshot.isDraggingOver)}>
          {tasks.map((task, index) => <TaskItem key={task.id} task={task} index={index} />)}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.instanceOf(Task)).isRequired,
};

TaskList.defaultProps = {
  tasks: [],
};

export default TaskList;
