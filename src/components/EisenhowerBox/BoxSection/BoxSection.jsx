import React from 'react';

import "./BoxSection.css";

/**
 * A single section of the Esienhower box
 */
export default class BoxSection extends React.Component {
    render() {
        return (
            <div className={`box-section box-section-${this.props.type}`}>
                <h2 className="box-section-title">{this.props.type}</h2>
                <span className="box-section-desc">{this.props.description}</span>
            </div>
        )
    }
}