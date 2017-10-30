export const ADD_TODO = 'ADD_TODO';

export const REMOVE_TODO = 'REMOVE_TODO';

export const SET_TODOS = 'SET_TODOS';


export const addTodo = (text) => { return { type: ADD_TODO, text } };

export const removeTodo = (text) => { return { type: REMOVE_TODO, text } };

export const setTodos = (todos) => { return { type: SET_TODOS, todos } };

const todoAppAction = {
  ADD_TODO, addTodo,
  REMOVE_TODO, removeTodo,
  SET_TODOS, setTodos,
};

export default todoAppAction;