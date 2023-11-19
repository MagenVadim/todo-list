import React,{useState} from 'react'
import { RiDeleteBinLine } from "react-icons/ri";


export default function TodoItem({title, id, completed, todos, deleteTodo}) {

  const [checked, setChecked] = useState(completed)
  const cls = ['todo']

  const handleTodo = () =>{
    todos.map(item =>{
      if(id===item.id){
        deleteTodo(item)
      }    
    });      
  }


  if (checked){
    cls.push('completed')
  }

  return (
    <div className="wrap-list">
        <li className={cls.join(' ')}>
            <label>
                <input
                 type="checkbox"
                 checked={checked}
                 onChange={()=> setChecked(!checked)}
                 />

                <span>{title}</span>                  
                <button onClick={handleTodo}>
                  <RiDeleteBinLine className="delete-icon"/>
                </button>                
            </label>
        </li>
    </div>
  )
}
