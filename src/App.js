import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Filter from './Filter';
import './App.css';

const initialTodo = [
  {
    id: uuid(),
    task: 'Learn React',
    complete: true,
  },
  {
    id: uuid(),
    task: 'Learn Firebase',
    complete: true,
  },
  {
    id: uuid(),
    task: 'Learn GraphQL',
    complete: false,
  },
];

function App() {
  const [todoList, setTodoList] = useState(initialTodo);
  const add = value => setTodoList(todoList.concat([{
    id: uuid(),
    task: value,
    complete: false,
  }]));
  const doTodo = id => setTodoList(todoList.map(
    todo => todo.id !== id ? todo : { ...todo, complete: true }
  ));
  const undoTodo = id => setTodoList(todoList.map(
    todo => todo.id !== id ? todo : { ...todo, complete: false }
  ));
  const [ filter, setFilter ] = useState('all');
  const filteredTodo = todoList.filter(todo => {
    if(filter === 'complete') {
      return todo.complete;
    }
    if(filter === 'incomplete') {
      return !todo.complete;
    }
    return true;
  });
  return (
    <div className="App">
      <AddTodo add={ add } />
      <Filter setFilter={ setFilter } filter={ filter } />
      <TodoList
        todoList={ filteredTodo }
        doTodo={ doTodo }
        undoTodo={ undoTodo }
      />
    </div>
  );
}

export default App;
