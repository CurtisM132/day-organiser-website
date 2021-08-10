import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './app/App';
import store from './app/store';

render(
  /**
   * StrictMode is a tool for highlighting potential problems in an application
   * Identifying components with unsafe lifecycles
   * Warning about legacy string ref API usage
   * Warning about deprecated findDOMNode usage
   * Detecting unexpected side effects
   * Detecting legacy context API
   *
   * https://reactjs.org/docs/strict-mode.html
   */
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root'),
);
