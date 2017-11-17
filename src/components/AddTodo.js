import React from 'react';

const AddTodo = ({ onAddClick }) => {
  let input = null;

  return (
    <form>
      <input type="text" ref={ref => input = ref} />
      <button
        onClick={ev => {
          ev.preventDefault();
          if (!input.value) {
            return false;
          }
          onAddClick(input.value);
          input.value = '';
        }}
      >Add Todo</button>
    </form>
  );
};

export default AddTodo;