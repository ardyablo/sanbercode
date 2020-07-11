import React from 'react';
import './App.css';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';

// Actions Type
const ADD_NUMBER = 'add_number';
const SUBTRACT_NUMBER = 'subtract_number';

// Actions
const addAction = () => ({
    type: ADD_NUMBER,
    payload: 1,
});

const subtractAction = () => ({
    type: SUBTRACT_NUMBER,
    payload: 2,
});

// Reducers
const mathReducer = (state = {number: 0}, action) => {
  if (action.type === ADD_NUMBER) {
      return {...state, number: state.number + action.payload};
  }
  else if (action.type === SUBTRACT_NUMBER) {
      return {...state, number: state.number - action.payload};
  }
  return state;
};

// Root Reducers
const rootReducer = combineReducers({
 math: mathReducer,
});

// Store
const store = createStore(
  rootReducer, applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// mapStateToProps
const mapStateToProps = (state => {
  return {
      number: state.math.number,
  };
});

// mapDispatchToProps
const mapDispatchToProps = dispatch => ({
  // add: () => dispatch(addAction()),
  // subtract: () => dispatch(subtractAction()),
  add: () => setTimeout(() => {
    dispatch(addAction());
  },1000),
  subtract: () => setTimeout(() => {
    dispatch(subtractAction());
  },1000),  
});

const Counter = (props) => (
  <div>
      <h2>Counter: {props.number}</h2>      
      <input type='button' value='subtract' onClick={props.subtract} />
      <input type='button' value='add' onClick={props.add} />
  </div>
);

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

const App = () => (
  <Provider store={store}>
      <ConnectedCounter />
  </Provider>
);

export default App;