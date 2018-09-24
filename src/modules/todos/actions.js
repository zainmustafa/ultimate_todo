
export const TODOS_FETCH_REQUEST = 'TODOS_FETCH_REQUEST';
export const TODOS_FETCH_SUCCESS = 'TODOS_FETCH_SUCCESS';
export const TODOS_ADD_REQUEST = 'TODOS_ADD_REQUEST';
export const TODOS_ADD_SUCCESS = 'TODOS_ADD_SUCCESS';
export const TODOS_REMOVE_REQUEST = 'TODOS_REMOVE_REQUEST';
export const TODOS_REMOVE_SUCCESS = 'TODOS_REMOVE_SUCCESS';
export const TODOS_COMPLETE_REQUEST = 'TODOS_COMPLETE_REQUEST';
export const TODOS_COMPLETE_SUCCESS = 'TODOS_COMPLETE_SUCCESS';
export const TODOS_EDIT_REQUEST = 'TODOS_EDIT_REQUEST';
export const TODOS_EDIT_SUCCESS = 'TODOS_EDIT_SUCCESS';

export const fetchTodos = () => ({ type: TODOS_FETCH_REQUEST });
export const addTodo = (text, description) => ({ type: TODOS_ADD_REQUEST, text, description});
export const deleteTodo = id => ({ type: TODOS_REMOVE_REQUEST, id });
export const editTodo = (id, text, description) => ({ type: TODOS_EDIT_REQUEST, id, text, description });
export const completeTodo = (id, completed) => ({ type: TODOS_COMPLETE_REQUEST, id, completed });
