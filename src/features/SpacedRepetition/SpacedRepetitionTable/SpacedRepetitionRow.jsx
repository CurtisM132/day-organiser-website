import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    learningRecords: PropTypes.array,
}

const defaultTypes = {
    learningRecords: [],
}

const SpacedRepetitionRow = ({learningRecords}) => {
    console.log(learningRecords)

    return (
        <div>
            
        </div>
    );
}

SpacedRepetitionRow.propTypes = propTypes;
SpacedRepetitionRow.defaultTypes = defaultTypes;

export default SpacedRepetitionRow; 