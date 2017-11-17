import { todoAppAction } from '../actions/index';

import _ from 'lodash';

const initialState = {
  todos: [],
};

export default function todoAppReducer(state = initialState, action) {

  switch (action.type) {

    case todoAppAction.ADD_TODO:

      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          { todoId: Date.now(), text: action.text, done: false }
        ]
      });

    case todoAppAction.REMOVE_TODO:
      let newTodos = _.remove(state.todos, function(todo) {
        return todo.text !== action.text;
      });
                                                                                                                                                                                                                                                                                                                             
      return Object.assign({}, state, { todos: newTodos });

    case todoAppAction.SET_TODOS:

      return Object.assign({}, state, {
        todos: [ ...action.todos ]
      });

    default:
      return state;
  }
}
