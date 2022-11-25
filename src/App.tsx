import React from 'react';
import './App.css';
import TodoAddBlock from './components/TodoAddBlock';
import TodoListItem from './components/TodoList';

function App() {
  return (
    <div>
     <TodoAddBlock/>
     <TodoListItem/>
    </div>
  );
}

export default App;
