import { Button, TextField, Paper } from '@mui/material'
import React, { useState } from 'react'

export default function Form({ todoHandler }){

    const [text, setText] = useState(null)
    const [id, setId] = useState(0)

    const todoContent = (text) => {
        const todoNew = {
            id: id,
            text: text
        }

        setId(id + 1)
        todoHandler(todoNew)
        document.getElementById("standard-basic").value=null
    }
    
    return(
        <Paper style={{padding: "1em"}}>
        
        <div style={{display:"flex"}}>
        <TextField 
            
            id="standard-basic" 
            label="TAREFA..." 
            variant="standard" fullWidth
            onChange={(e) => setText(e.target.value)}

            color="secondary"
            focused
            requerid
            />
        <Button style={{borderColor: "#BF00FF", color: "#BF00FF"}}
        variant="outlined"
        onClick={() => todoContent(text)}
        >Add</Button>
        </div>

        </Paper>
    )
}