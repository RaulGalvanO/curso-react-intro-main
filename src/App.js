import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import './App.css';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  {text:"Jugar futbol", completed:false},
  {text:"Aprender React", completed:false},
  {text:"Ir al gym", completed:true},
  {text:"Practicar baile", completed:false},
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={1} total={3}/>
      <TodoSearch/>
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
