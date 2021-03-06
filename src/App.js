import React, { useState, useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Filter from './Filter';
import TodoContext from './todoContext';
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

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': 
      return state.concat([{
        id: uuid(),
        task: action.value,
        complete: false,
      }]);
    case 'DO_TODO': 
      return state.map(
        todo => todo.id !== action.id ? todo : { ...todo, complete: true }
      );
    case 'UNDO_TODO': 
      return state.map(
        todo => todo.id !== action.id ? todo : { ...todo, complete: false }
      );
    default:
      throw new Error();
  };
}

function App() {
  const [ todoList, dispatch ] = useReducer(todoReducer, initialTodo);
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
      <TodoContext.Provider value={ dispatch }>
        <AddTodo />
        <Filter setFilter={ setFilter } filter={ filter } />
        <TodoList todoList={ filteredTodo } />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
