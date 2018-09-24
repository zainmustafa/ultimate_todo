import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import todosReducer from './todos/reducer';
import todosEpic from './todos/epics';


export const epics = combineEpics(
  todosEpic,
);

export const reducers = combineReducers({
  todos: todosReducer,
});
