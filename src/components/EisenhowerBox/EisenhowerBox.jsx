import React from 'react';

import './EisenhowerBox.css';
import BoxSection from './BoxSection/BoxSection';

/**
 * Displays an Eisenhower box
 */
export default class EisenhowerBox extends React.Component {
  render() {
    return (
      <div className="box-container">
        <div className="box-div urgent-div">URGENT</div>
        <div className="box-div not-urgent-div">NOT URGENT</div>
        <div className="box-div important-div">IMPORTANT</div>
        <div className="box-1">
          <BoxSection type="do" description="Do it now" />
        </div>
        <div className="box-2">
          <BoxSection type="decide" description="Schedule a time to do it" />
        </div>
        <div className="box-div not-important-div">NOT IMPORTANT</div>
        <div className="box-3">
          <BoxSection type="delegate" description="Who can do it for you?" />
        </div>
        <div className="box-4">
          <BoxSection type="delete" description="Eliminate it" />
        </div>
      </div>

    );
  }
}
