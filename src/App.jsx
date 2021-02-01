import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd';

import "./App.css"
import EisenhowerBox from './components/EisenhowerBox/EisenhowerBox';
import TaskList from './components/TaskList/TaskList';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
    }

    render() {
        return (
            <div className={"main-display"}>
                <DragDropContext>
                    <div className={"task-list-container"}>
                        <TaskList />
                    </div>
                    <div className={"box-display"}>
                        <EisenhowerBox />
                    </div>
                </DragDropContext>
            </div>
        );
    }
}