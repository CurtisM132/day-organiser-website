import { combineReducers } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/tasksSlice';
import navbarReducer from '../features/sidebar/SidebarSlice';
import settingsReducer from '../features/settings/SettingsSlice';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  navbar: navbarReducer,
  settings: settingsReducer,
});

export default rootReducer;
