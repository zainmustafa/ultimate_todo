import { combineEpics } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';

import {
  TODOS_FETCH_REQUEST,
  TODOS_FETCH_SUCCESS,
  TODOS_ADD_REQUEST,
  TODOS_ADD_SUCCESS,
  TODOS_REMOVE_REQUEST,
  TODOS_REMOVE_SUCCESS,
  TODOS_COMPLETE_REQUEST,
  TODOS_COMPLETE_SUCCESS,
  TODOS_EDIT_REQUEST,
  TODOS_EDIT_SUCCESS,
} from './actions';

const fetchTodos = action$ =>
  action$.ofType(TODOS_FETCH_REQUEST)
    .mergeMap(() =>
        ajax.getJSON('https://nosql-node-api.herokuapp.com/todo/api/v1.0/tasks')
            .map(response => ({ type: TODOS_FETCH_SUCCESS, payload: response }))
            .catch(console.log('Failed to fetch tasks')),
    );

const addTodo = action$ =>
  action$.ofType(TODOS_ADD_REQUEST)
    .mergeMap(action =>
      ajax.post('https://nosql-node-api.herokuapp.com/todo/api/v1.0/tasks', {
          title: action.text,
          description: action.description,
      }, { 'Content-Type': 'application/json' })
        .map(({ response }) => ({ type: TODOS_ADD_SUCCESS, id: response._id, text: action.text, description: action.description }))
        .catch(console.log('Failed to add a new task')),
    );

const removeTodo = action$ =>
  action$.ofType(TODOS_REMOVE_REQUEST)
    .mergeMap(action =>
      ajax.delete(`https://nosql-node-api.herokuapp.com/todo/api/v1.0/tasks/${action.id}`)
        .map(() => ({ type: TODOS_REMOVE_SUCCESS, _id: action.id }))
        // .catch(createErrorAction(`Failed to remove task #${action.id}`)),
    );

const completeTodo = action$ =>
  action$.ofType(TODOS_COMPLETE_REQUEST)
    .mergeMap(action =>
      ajax.put(`https://nosql-node-api.herokuapp.com/todo/api/v1.0/tasks/${action.id}`, {
        done: !action.completed,
      }, { 'Content-Type': 'application/json' })
        .map(() => ({ type: TODOS_COMPLETE_SUCCESS, id: action.id }))
        .catch(console.log(`Failed to mark task #${action.id} as completed`)),
    );
const editTodo = action$ =>
  action$.ofType(TODOS_EDIT_REQUEST)
    .mergeMap(action =>
      ajax.put(`https://nosql-node-api.herokuapp.com/todo/api/v1.0/tasks/${action.id}`, {
        title: action.text,
        description: action.description,
      }, { 'Content-Type': 'application/json' })
        .map(() => ({ type: TODOS_EDIT_SUCCESS, id: action.id, text: action.text, description:action.description }))
        .catch(console.log(`Failed to edit task #${action.id}`))
    );

export default combineEpics(
  fetchTodos,
  addTodo,
  removeTodo,
  completeTodo,
  editTodo,
);
