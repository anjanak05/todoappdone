import React from 'react'
import { useState } from 'react'
import styles from "../components/todoapp.module.css"
import Todoitem from './todoitem'

const TodoInput = () => {
const [word, setWord] = useState("")
const [inputTodo, setInputTodo] = useState([])

const onDelete = (id) =>{
let newtodo = inputTodo.filter(elem =>elem.id !== id)
setInputTodo(newtodo)
}
  return (
      <>
      <h1>TodoInput</h1>
  
        <input type="text" placeholder='Add here'  value={word} onChange={(e)=>{
           setWord(e.target.value)
        }} />

        <button onClick={()=>{
          console.log(word)
            setInputTodo([...inputTodo, {
             id:Date.now(),
                value: word
            }])
            setWord("") 
        }} >Add</button>
  
  
      
        {
           inputTodo.map((elem) => (
<Todoitem key={elem.id} elem={elem} onDelete={onDelete}/>
    
           )) 
        }
 
    </>
  )
}

export default TodoInput