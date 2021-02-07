import React from 'react';
import PropTypes from 'prop-types';

import './EisenhowerBox.css';
import BoxSection from './BoxSection/BoxSection';


/**
 * Displays an Eisenhower box
 */
const EisenhowerBox = ({ eisenhowerTasks }) => {
  return (
    <div className="box-container">
      <div className="box-div urgent-div">URGENT</div>
      <div className="box-div not-urgent-div">NOT URGENT</div>
      <div className="box-div important-div">IMPORTANT</div>
      <div className="box-1">
        <BoxSection type="do" description="Do it now" tasks={eisenhowerTasks.do} />
      </div>
      <div className="box-2">
        <BoxSection type="decide" description="Schedule a time to do it" tasks={eisenhowerTasks.decide} />
      </div>
      <div className="box-div not-important-div">NOT IMPORTANT</div>
      <div className="box-3">
        <BoxSection type="delegate" description="Who can do it for you?" tasks={eisenhowerTasks.delegate} />
      </div>
      <div className="box-4">
        <BoxSection type="delete" description="Eliminate it" tasks={eisenhowerTasks.delete} />
      </div>
    </div>

  );
}

EisenhowerBox.propTypes = {
  eisenhowerTasks: PropTypes.object.isRequired,
}

EisenhowerBox.defaultProps = {
  eisenhowerTasks: {
    do: [],
    decide: [],
    delegate: [],
    delete: []
  }
}

export default EisenhowerBox;
