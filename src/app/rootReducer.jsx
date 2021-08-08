import { combineReducers } from '@reduxjs/toolkit';

import tasksReducer from '@features/Tasks/tasksSlice';
import navbarReducer from '@features/Sidebar/SidebarSlice';
import settingsReducer from '@features/Settings/SettingsSlice';
import { spacedRepetitionApi } from '@features/SpacedRepetition/spacedRepetitionApi';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  navbar: navbarReducer,
  settings: settingsReducer,
  [spacedRepetitionApi.reducerPath]: spacedRepetitionApi.reducer
});

export default rootReducer;
