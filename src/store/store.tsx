// src/store/store.js
// src/store/store.js
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../slice/counterslice'; // Import the reducer directly
import newsReducer from '../slice/newsSlice';
import initialReducer from '../slice/initialSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    news: newsReducer,
    initial:initialReducer
  },
  // Additional configuration options if needed
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//module.exports = store;
