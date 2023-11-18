import React, {useState} from 'react'
import './App.css';
import TodoList from './TodoList';


function App() {
  const [todos, setTodos] = useState(
    [
      {id: 1, title: 'First todo', completed: false},
      {id: 2, title: 'Second todo', completed: true},
    ]
  )
  const [todoTitle, setTodoTitle] = useState('')
  const addTodo = event => {
    if (event.key === "Enter"){
      setTodos(
        [...todos,
          {
            id: Date.now(),
            title: todoTitle,
            completed: false
        }]
      )
    }
  }

  return (
    <div className="container">
      <h1>TODO app</h1>

      <div className="input-field">
        <input className="placeholder-field"
         type="text"
         value={todoTitle}
         onChange={event => setTodoTitle(event.target.value)}
         onKeyDown={addTodo}
         placeholder='Todo name'
         />
      </div>

      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
