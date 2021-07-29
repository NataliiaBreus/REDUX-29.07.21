import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

const initialState = {
  count: 0,
  step: 1,
};
 function reducer (state = initialState, action) {
   switch (action.type) {
     case 'increment' : {
       return {...state, count: state.count + state.step};
     }
     case 'decrement' : {
      return {...state, count: state.count - state.step};
    }
    case 'setStep' : {
      return {...state, step: action.newStep <= 0 ? 0.1 : action.newStep};
    }
    default: {
      return state;
    }
   }
 }

 const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
