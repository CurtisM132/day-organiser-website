import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';

import './BoxSection.css';
import Task from '@objects/Task';
import { colorShade, rgbToHex } from '@utils/Colour';
import TaskItem from '../../Tasks/TaskItem/TaskItem';

/**
 * A single section of the Eisenhower box
 */
const BoxSection = ({ type, description, tasks }) => {
  const [currentBackgroundColorHex, setCurrentBackgroundColorHex] = useState('');

  const divRef = useRef(null);

  // After the components have loaded get the background colour of the box
  useEffect(() => {
    setCurrentBackgroundColorHex(rgbToHex(getComputedStyle(divRef.current).backgroundColor));
  }, []);

  const getDroppableStyle = (isDragging) => ({
    flex: '2 0 auto',
    // Lighten the background on hover
    backgroundColor: isDragging
      ? colorShade(currentBackgroundColorHex, 8) : currentBackgroundColorHex,
  });

  return (
    <div className={`box-section box-section-${type}`} ref={divRef}>
      <h2 className="box-section-title">{type}</h2>
      <span className="box-section-desc">{description}</span>

      {/* Create a droppable task item */}
      {/* Capitalise the type to conform to camelCase */}
      <Droppable droppableId={`boxSection${type[0].toUpperCase() + type.substring(1)}`}>
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps} style={getDroppableStyle(snapshot.isDraggingOver)}>
            {tasks.map((task, index) => <TaskItem key={task.id} task={task} index={index} />)}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

BoxSection.propTypes = {
  type: PropTypes.string,
  description: PropTypes.string,
  tasks: PropTypes.arrayOf(PropTypes.instanceOf(Task)).isRequired,
};

BoxSection.defaultProps = {
  type: '',
  description: '',
};

export default BoxSection;
