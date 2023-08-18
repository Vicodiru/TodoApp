import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TodoContainer from './Pages/Todo';
import Todoform from './forms/Todoform';
import TodoList from './Components/TodoList';

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (value) => {
    setTodos([...todos, value]);
  };
  
  return (
    <div className="w-full h-screen flex bg-slate-800 justify-center items-center">
      <TodoContainer>
        <Todoform handleAdd={addTodo} />
        <TodoList todos={todos} set={setTodos} />
      </TodoContainer>
    </div>
  );
}

export default App;
