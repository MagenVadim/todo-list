import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos, deleteTodo}) {
  return (
    <div className="list-box">
        <ul>
            {todos.map(item =><TodoItem todos={todos} deleteTodo={deleteTodo} key={item.id}{...item}/>)}
        </ul>
    </div>
  )
}
