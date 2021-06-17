import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './js/App';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


