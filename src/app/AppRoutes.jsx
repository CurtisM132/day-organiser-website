import React from 'react';
import { Switch, Route } from "react-router-dom";

import EisenhowerBox from '../features/eisenhower/EisenhowerBox/EisenhowerBox';
import TaskController from '../features/tasks/TaskController/TaskController';
import ToDoListController from '../features/TodoList/TodoListController/TodoListController';

/**
 * Contains all of the URL routes and their associated components
 */
const AppRoutes = () => {
    const eisenhowerTasks = null;

    return (
        <Switch>
            <Route path="/todo-list">
                <div className="task-list-container">
                    <TaskController />
                </div>
                <div className="box-display">
                    <ToDoListController />
                </div>
            </Route>

            <Route path="/eisenhower-box">
                <div className="task-list-container">
                    <TaskController />
                </div>
                <div className="box-display">
                    <EisenhowerBox eisenhowerTasks={eisenhowerTasks} />
                </div>
            </Route>

            <Route path="/scheduler/day">
                <div>WIP</div>
            </Route>

            <Route path="/scheduler/week">
                <div>WIP</div>
            </Route>

            <Route path="/scheduler/month">
                <div>WIP</div>
            </Route>

            <Route path="/spaced-repetition">
                <div>WIP</div>
            </Route>

            <Route path="/scratch-pad">
                <div>WIP</div>
            </Route>

            <Route path="/">
                {/* TODO: Home page component */}
            </Route>

        </Switch>
    );
}

export default AppRoutes;