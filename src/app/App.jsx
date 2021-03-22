import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import './App.css';
import { darkTheme, lightTheme } from './Theme';
import AppRoutes from './AppRoutes';
import Navbar from '../features/navbar/Navbar';
import Sidebar from '../features/sidebar/SidebarComponent/Sidebar';


const App = () => {
  const dispatch = useDispatch();
  const { eisenhowerTasks } = useSelector((state) => state.tasks.eisenhowerTasks);

  /**
  * Users might have specified a preference for a light or dark theme. The method by which the user expresses their preference can vary. 
  * It might be a system-wide setting exposed by the Operating System, or a setting controlled by the User Agent.
  * You can leverage this preference dynamically with the useMediaQuery hook and the prefers-color-scheme media query.
  */
  const materialTheme = useMediaQuery('(prefers-color-scheme: dark)') ? darkTheme : lightTheme;

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
      // TODO: Potentially refactor droppableIds
      // Get source and destination arrays from the current state
      let sourceArray = source.droppableId.includes('boxSection') ? this.eisenhowerTasks[source.droppableId.replace('boxSection', '').toLowerCase()] : this.allTasks;
      let destinationArray = destination.droppableId.includes('boxSection') ? this.eisenhowerTasks[destination.droppableId.replace('boxSection', '').toLowerCase()] : this.allTasks;

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

  return (
    <ThemeProvider theme={materialTheme}>
      <CssBaseline />

      <div className="main-display">
        <div className="navbar">
          <Navbar />
        </div>

        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="content-display">
          <DragDropContext onDragEnd={onDragEnd}>
            <AppRoutes />
          </DragDropContext>
        </div>
      </div >
    </ThemeProvider >
  );
};

export default App;
