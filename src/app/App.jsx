import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import './App.css';
import EisenhowerBox from '../features/eisenhower/EisenhowerBox/EisenhowerBox';
import TaskList from '../features/tasks/TaskList/TaskList';
import Task from '../objects/Task';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // TODO: Remove dummy data
            allTasks: [new Task(0, 'Example Task 1'), new Task(1, 'Example Task 2'), new Task(2, 'Example Task 3')],
            eisenhowerTasks: {
                do: [],
                decide: [],
                delegate: [],
                delete: []
            }
        };
    }

    getTaskList() {
        // API Call to get all tasks
        // Bind to allTasks state
    }

    getEisnehowerTaskList() {
        // API Call to get current Eisenhower tasks
        // Bind to eisenhowerTasks state
    }

    /**
     * Moves task from one state array to another.
     */
    moveTask = (source, destination, droppableSource, droppableDestination) => {
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        const [removed] = sourceClone.splice(droppableSource.index, 1);

        destClone.splice(droppableDestination.index, 0, removed);

        const result = {};
        result[droppableSource.droppableId] = sourceClone;
        result[droppableDestination.droppableId] = destClone;

        return result;
    };

    /**
     * Called when a task stops being dragged. Depending on the destination may move a task to another state array
     */
    onDragEnd = (e) => {
        const { source, destination } = e;

        // Dropped outside the list
        if (!destination) {
            return;
        }

        // Destination a different list
        if (source.droppableId !== destination.droppableId) {
            let sourceArray = [];
            let destinationArray = [];

            // TODO: Potentially refactor droppableIds
            // Get source and destination arrays from the current state
            if (source.droppableId.includes("boxSection")) {
                sourceArray = this.state.eisenhowerTasks[source.droppableId.replace("boxSection", "").toLowerCase()]
            }
            else {
                sourceArray = this.state.allTasks;
            }

            if (destination.droppableId.includes("boxSection")) {
                destinationArray = this.state.eisenhowerTasks[destination.droppableId.replace("boxSection", "").toLowerCase()]
            }
            else {
                destinationArray = this.state.allTasks;
            }

            // Move task to destination array and return an object of the updated arrays
            const result = this.moveTask(sourceArray, destinationArray, source, destination);

            // Iterate over the arrays and update the state
            Object.keys(result).map((key) => {
                if (key.includes("boxSection")) {
                    this.setState(prevState => ({ ...prevState, eisenhowerTasks: { ...prevState.eisenhowerTasks, [key.replace("boxSection", "").toLowerCase()]: result[key] } }));
                }
                else {
                    this.setState({ allTasks: result[key] });
                }
            });
        }
    }

    render() {
        return (
            <div className="main-display">
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <div className="task-list-container">
                        <TaskList tasks={this.state.allTasks} />
                    </div>
                    <div className="box-display">
                        <EisenhowerBox eisenhowerTasks={this.state.eisenhowerTasks} />
                    </div>
                </DragDropContext>
            </div>
        );
    }
}
