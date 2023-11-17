import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos}) {
  return (
    <div>
        <ul>
            {todos.map(item => <TodoItem key={item.id}{...item}/>)}
        </ul>
    </div>
  )
}