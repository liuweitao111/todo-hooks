import React from 'react';

export default function TodoList(props) {
  const { todoList, doTodo, undoTodo } = props;
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