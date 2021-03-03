import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { PageEnum } from '../features/navbar/navbarSlice';
import NavbarComponent from '../features/navbar/NavbarComponent';
import EisenhowerBox from '../features/eisenhower/EisenhowerBox/EisenhowerBox';
import TaskController from '../features/tasks/TaskController/TaskController';

const App = () => {
  const dispatch = useDispatch();
  const { eisenhowerTasks } = useSelector((state) => state.tasks.eisenhowerTasks);
  const currentPage = useSelector((state) => state.navbar.currentPage);

  // getTaskList = () => {
  //     // API Call to get all tasks
  //     // Bind to allTasks state
  // }

  // getEisnehowerTaskList = () => {
  //     // API Call to get current Eisenhower tasks
  //     // Bind to eisenhowerTasks state
  // }

  /**
     * Moves task from one state array to another.
     */
  const moveTask = (source, destination, droppableSource, droppableDestination) => {
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
  const onDragEnd = (e) => {
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
      if (source.droppableId.includes('boxSection')) {
        sourceArray = this.eisenhowerTasks[source.droppableId.replace('boxSection', '').toLowerCase()];
      } else {
        sourceArray = this.allTasks;
      }

      if (destination.droppableId.includes('boxSection')) {
        destinationArray = this.eisenhowerTasks[destination.droppableId.replace('boxSection', '').toLowerCase()];
      } else {
        destinationArray = this.allTasks;
      }

      // Move task to destination array and return an object of the updated arrays
      const result = this.moveTask(sourceArray, destinationArray, source, destination);

      // // Iterate over the arrays and update the state
      // Object.keys(result).map((key) => {
      //     if (key.includes("boxSection")) {
      //         this.setState(prevState => ({ ...prevState, eisenhowerTasks: { ...prevState.eisenhowerTasks, [key.replace("boxSection", "").toLowerCase()]: result[key] } }));
      //     }
      //     else {
      //         this.setState({ allTasks: result[key] });
      //     }
      // });
    }
  };

  /**
   * Return the correct component to display based on the currentPage state
   */
  const currentPageComponent = () => {
    switch (currentPage) {
      case PageEnum.TODO:
        return (
          <div className="box-display">
            YEET
          </div>
        )
      case PageEnum.EISENHOWER_BOX:
        return (
          <div className="box-display">
            <EisenhowerBox eisenhowerTasks={eisenhowerTasks} />
          </div>
        )
      case PageEnum.DAY_SCHEDULER:
        break;
      case PageEnum.WEEK_SCHEDULER:
        break;
    }
  }

  return (
    <div className="main-display">
      <NavbarComponent />

      <div className="feature-display">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="task-list-container">
            <TaskController />
          </div>
          {currentPageComponent()}
        </DragDropContext>
      </div>
    </div>
  );
};

export default App;
