import { combineReducers } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/tasksSlice';
import navbarReducer from '../features/navbar/navbarSlice';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  navbar: navbarReducer,
});

export default rootReducer;
