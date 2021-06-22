import { combineReducers } from '@reduxjs/toolkit';
import tasksReducer from '@features/Tasks/tasksSlice';
import navbarReducer from '@features/Sidebar/SidebarSlice';
import settingsReducer from '@features/Settings/SettingsSlice';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  navbar: navbarReducer,
  settings: settingsReducer,
});

export default rootReducer;
