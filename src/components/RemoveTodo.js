import React from 'react';

const RemoveTodo = ({ onRemoveClick }) => {
  let input = null;

  return (
    <form>
      <input type="text" ref={ref => input = ref} />
      <button onClick={ev => {
        ev.preventDefault();
        if(!input.value) {
          return false;
        }
        onRemoveClick(input.value);
        input.value = '';
      }}>Remove Todo</button>
    </form>
  );
};

export default RemoveTodo;