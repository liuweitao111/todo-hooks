import React, { useState, useContext } from 'react';
import TodoContext from '../todoContext';

export default function AddTodo() {
  const [value, setValue] = useState('');
  const dispatch = useContext(TodoContext);
  const add = value => dispatch({ type: 'ADD', value });
  return (
    <div>
      <input value={ value } onChange={e => setValue(e.target.value)} />
      <button onClick={ () => add(value) }>Add</button>
    </div>
  );
}