import React from 'react'

export default function TodoItem({title, id, completed}) {
  return (
    <div>
        <li className="container">
            <label>
                <input type="checkbox" defaultChecked={false}/>
                <span>{title}</span>
            </label>
        </li>
    </div>
  )
}
