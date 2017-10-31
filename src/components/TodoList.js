import React from 'react';

const TodoItem = ({ todo }) => {
  return <li>{todo.text}</li>;
};

const TodoList = ({ todos }) => {
  return (
    <ul>
      { todos.map(todo => <TodoItem key={todo.todoId} todo={todo} />) }
    </ul>
  );
}

export default TodoList;