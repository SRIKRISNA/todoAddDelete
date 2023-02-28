import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './todo.css';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Header from './Header';

const Todo = () => {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    const addTodo = () => {
        setTodoList([...todoList, { todo }]);
        setTodo("");
    }
    const RemoveTodo = (e) => {
        var newArr = [...todoList];
        newArr.splice(e, 1);
        setTodoList(newArr);
    }
    return (
        <div className='container'>
            <Header/>
            <Stack spacing={2} direction="row">
                <TextField id="standard-basic" label="Add Todo" variant="standard" onChange={(e) => setTodo(e.target.value)} />
                <Button variant="contained" color="success" onClick={addTodo}>Add <AddIcon /></Button>
            </Stack>
            <div className="data-display">
                <div className="data-values heading">
                    <h4>List Item</h4>|
                    <h4>Remove</h4>
                </div>
                {
                    todoList.map((ele, i) => (
                        <div key={i} className="data-values">
                            <p>{ele.todo}</p>|
                            <Button onClick={() => RemoveTodo(i)} color="error" > <DeleteIcon /></Button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Todo