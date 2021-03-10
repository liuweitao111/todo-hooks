import React, { useContext } from 'react';
import TodoContext from '../todoContext';

export default function TodoList(props) {
  const { todoList } = props;
  const dispatch = useContext(TodoContext);
  const doTodo = id => dispatch({ type: 'DO_TODO', id });
  const undoTodo = id => dispatch({ type: 'UNDO_TODO', id });
  return (
    <ul>
      {todoList.map(todo => (
        <li key={ todo.id }>
          { todo.task }
          <input
            type="checkbox"
            checked={ todo.complete }
            onChange={ () => todo.complete ? undoTodo(todo.id) : doTodo(todo.id) }
          />
        </li>
      ))}
    </ul>
  );
}