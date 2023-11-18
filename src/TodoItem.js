import React from 'react'

export default function TodoItem({title, id, completed}) {
  return (
    <div className="wrap-list">
        <li className="todo">
            <label>
                <input type="checkbox" defaultChecked={false}/>
                <span>{title}</span>
                <i className="material-icons red-text">delete</i>
            </label>
        </li>
    </div>
  )
}
