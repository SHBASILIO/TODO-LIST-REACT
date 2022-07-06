import React, { useState, useEffect } from 'react'

import { List } from '@mui/material'
import Form from '../components/Form'
import TodoItem from '../components/TodoItem'

export default function Home(){
    const [todos, setTodos] = useState([])
    const [user, setUser] = useState({name: '', avatar: ''})

    const todoHandler = (todo) => {
        setTodos([...todos, todo])
    }

    const deleteTodo = (id) => {
        var filtered = todos.filter((todo) => todo.id !== id)
        setTodos(filtered)
    }

    useEffect(() => {
        fetch('https://api.github.com/users/SHBASILiO')
        .then(response => response.json())
        .then(data => {
            setUser({
                name: data.name,
                avatar: data.avatar_url
            })
        })
    }, [])

    return(
        <div className="App">
        <header>
        <h2>my todo list</h2>
        <div>
            <strong>{user.name}</strong>
            <img src={user.avatar} alt="foto de perfil" />
        </div>
        </header>

        <Form todoHandler={todoHandler}/>
    
        <List sx={{maxWidth: 512, bgcolor: 'background.paper', marginTop: "1em" }}>
            {todos.map((todo) => (
                <div key={todo.id} style={{marginTop: "1em"}}>
                <TodoItem todo={todo} deleteTodo={deleteTodo}/>
                </div>
            ))}
        </List>
    
        </div>  
    )
}