import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { add_task } from '../../JS/Actions/Actions'

const Addtask = () => {

    const [text,setText] = useState ("")
    const dispatch = useDispatch()

    const handleAdd = () => {
        
    if (text) {
        dispatch(add_task({id : Math.random(),text,isDone:false}))
    }
    else {
        alert("cannot add an empty text")
    }
    }
  return (
    <div style={{display:"flex" , flexDirection:"column" , width:"500px" , marginLeft:"500px"}}>
        <Form.Control  value = {text} onChange={(e)=> setText(e.target.value)} placeholder="Add new task"></Form.Control>
         <Button onClick = {handleAdd}>Add</Button>
    </div>
  )
}

export default Addtask