import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './features/userSlice';
import vacationsReducer from './features/vacationsSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    vacations: vacationsReducer,
  },
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);

