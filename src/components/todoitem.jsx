import React, { useState } from 'react'
import styles from "../components/todoapp.module.css"

const Todoitem = ({elem, onDelete}) => {
    const[iscompleted, setIscompleted] = useState(elem.iscompleted)
  return (
    <div className={styles.todo}  key={elem.id}>
               <input type="checkbox"  checked={iscompleted} onChange={(e)=>{
                   setIscompleted(e.target.checked)
               }}  />
               <div className={iscompleted ? styles.striked:""} >{elem.value}</div>
               <button onClick={()=> onDelete(elem.id)}>Delete</button>
               </div>
  )
}

export default Todoitem