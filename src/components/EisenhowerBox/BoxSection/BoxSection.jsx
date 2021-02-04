import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';

import './BoxSection.css';
import TaskItem from '../../TaskItem/TaskItem';
import Task from '../../../objects/Task';
import { colorShade, rgbToHex } from '../../../utilities/Style';

/**
 * A single section of the Eisenhower box
 */
export default class BoxSection extends React.Component {
    constructor(props) {
        super(props)

        this.state = { currentBackgroundColorHex: '' };

        this.divRef = React.createRef();
    }

    static propTypes = {
        type: PropTypes.string,
        description: PropTypes.string,
        tasks: PropTypes.arrayOf(PropTypes.instanceOf(Task)).isRequired
    }

    static defaultProps = {
        type: '',
        description: '',
        tasks: []
    }

    /**
     * After the components have loaded get the background colour of the box
     */
    componentDidMount() {
        const styles = getComputedStyle(this.divRef.current)
        this.setState({ currentBackgroundColorHex: rgbToHex(styles.backgroundColor) });
    }

    getDroppableStyle = (isDragging) => ({
        flex: '2 0 auto',
        // Lighten the background on hover
        backgroundColor: isDragging ? colorShade(this.state.currentBackgroundColorHex, 8) : this.state.currentBackgroundColorHex
    });

    render() {
        let { type, description, tasks } = this.props;

        return (
            <div className={`box-section box-section-${type}`} ref={this.divRef}>
                <h2 className="box-section-title">{type}</h2>
                <span className="box-section-desc">{description}</span>

                {/* Create a droppable task item */}
                {/* Capitalise the type to conform to camelCase */}
                <Droppable droppableId={`boxSection${type[0].toUpperCase() + type.substring(1)}`} >
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
