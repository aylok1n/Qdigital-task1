import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './js/App';
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { reducer } from './js/redux/reducer'

const store = createStore( reducer, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


