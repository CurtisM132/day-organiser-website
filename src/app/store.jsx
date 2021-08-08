import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import rootReducer from './rootReducer';
import { spacedRepetitionApi } from '@features/SpacedRepetition/spacedRepetitionApi';

const store = configureStore({
  reducer: rootReducer,

  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(spacedRepetitionApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch)

export default store;
