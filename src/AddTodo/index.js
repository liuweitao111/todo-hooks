import React, { useState } from 'react';

export default function AddTodo(props) {
  const { add } = props;
  const [value, setValue] = useState('');
  return (
    <div>
      <input value={ value } onChange={e => setValue(e.target.value)} />
      <button onClick={ () => add(value) }>Add</button>
    </div>
  );
}