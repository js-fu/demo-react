import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { todoAppAction } from '../actions/index';
import AddTodo from '../components/AddTodo';
import RemoveTodo from '../components/RemoveTodo';

import TodoList from '../components/TodoList';

class TodoApp extends Component {

  componentDidMount() {
    console.log('componentDidMount', this);

    const {
      setTodos,
    } = this.props;

    setTimeout(() => {
      let todos = [{
        todoId: 1,
        text: '11',
        done: false
      }];
      setTodos(todos);
    }, 2000);
  }

  render() {
    const {
      addTodo,
      removeTodo,
      todos
    } = this.props;

    // console.log('render', this.props);

    return (
      <div>
        <AddTodo onAddClick={addTodo} />
        <RemoveTodo onRemoveClick={removeTodo} />
        <button onClick={() => {
          let todos = this.props.todos;
          console.log('todos app', todos);
        }}>Get Todos</button>

        <TodoList todos={todos} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todoAppReducer.todos
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    addTodo: (...args) => dispatch(todoAppAction.addTodo(...args)),
    removeTodo: (...args) => dispatch(todoAppAction.removeTodo(...args)),
    setTodos: (...args) => dispatch(todoAppAction.setTodos(...args)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);