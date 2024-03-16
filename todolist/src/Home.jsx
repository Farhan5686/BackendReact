import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'

function Home() {
    const [todos,setTodos] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3005/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    },[])

    const handleEdit =(id)=> {
        axios.put('http://localhost:3005/update/+id')
        .then(result => {
          location.reload()
        })
        .catch(err => console.log(err))}
        const handleDelete = (id) =>{
          axios.delete('http://localhost:3005/delete/+id')
          .then(result => {
            location.reload()
        })
    
  return (
    <div className='home'>
      <h2>Todo List</h2>
      <Create/>
      {
        todos.length === 0
        ?
        <div><h2>No Record</h2></div>
        :
        todos.map(todo =>(
     <div className='task'>
        <div className='checkbox' onclick={() => handleEdit(todo_id)}>
        {todo.done ? 
              <BsFillCheckeCircleFill className='icon'></BsFillCheckeCircleFill>
      :<BsCircleFill className='icon'/>
      }
            
      <p className={todo.done ?"line_through" :""}>{todo.task}</p> 
      </div> 
      <div>
        <span> <BsFillTrashFill className='icon' onclick={() => handleDelete(todo._id)}/></span>
      </div>
     </div>
        ))
      }
    </div>
  )
}
}
export default Home
