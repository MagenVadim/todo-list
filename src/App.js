import React, {useState} from 'react'
import './App.css';
import TodoList from './TodoList';


function App() {
  const [todos, setState] = useState(
    [
      {id: 1, title: 'First todo', completed: false},
      {id: 2, title: 'Second todo', completed: true},
    ]
  )

  return (
    <div className="container">
      <h1>TODO app</h1>
      <div className="input-field">
        <input type="text" />
        <label> Todo name</label>
      </div>

      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
