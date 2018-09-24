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

const initialState = {
  pending: false,
  error: null,
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {

    case TODOS_FETCH_REQUEST:
    case TODOS_ADD_REQUEST:
    case TODOS_REMOVE_REQUEST:
    case TODOS_COMPLETE_REQUEST:
    case TODOS_EDIT_REQUEST:
      return {
        ...state,
        error: null,
        pending: true,
      };
    case TODOS_FETCH_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload,
      };
    case TODOS_ADD_SUCCESS:
      return {
        ...state,
        pending: false,
        data: [
          ...state.data,
          {
              _id: action.id,
              done: false,
              title: action.text,
              description: action.description,
          },
        ],
      };
    case TODOS_REMOVE_SUCCESS:
      return {
        ...state,
        pending: false,
        data: state.data.filter(todo => todo._id !== action._id),
      };
    case TODOS_COMPLETE_SUCCESS:
      return {
        ...state,
        data: state.data.map((todo) => {
          if (todo._id === action.id) {
            return { ...todo, done: !todo.done };
          }
          return todo;
        }),
      };
    case TODOS_EDIT_SUCCESS:
      return {
        ...state,
        data: state.data.map((todo) => {
          if (todo._id === action.id) {
            return { ...todo, title: action.text, description: action.description};
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};

