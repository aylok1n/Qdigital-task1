import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './js/App';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux';
import { rootReducer } from './js/redux/rootReducer';

const store = createStore( rootReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
const history = createBrowserHistory();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
       <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


