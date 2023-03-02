import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './todo.css';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Header from './Header';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

const Todo = () => {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [curIdx, setCurIdx] = useState(0);
    const [search, setSearch] = useState("");


    // add todo
    const addTodo = () => {
        setTodoList([...todoList, { todo }]);
        setTodo("");
    }
    // delete todo
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (e) => {
        console.log(todoList, e)  //i
        setOpen(true);
        setCurIdx(e);
    };

    const handleCancel = () => {
        setOpen(false);
    };
    const RemoveTodo = () => {
        var newArr = [...todoList];
        newArr.splice(curIdx, 1);
        setTodoList(newArr);
        setOpen(false);
    }

    return (
        <div className='todo-container'>
            <Header search={search} setSearch={setSearch}/><hr></hr>
            
            <div className="todoLists">
                <div className="inputTodo">
                    <Stack spacing={2} direction="row">
                        <TextField id="standard-basic" label="Add Todo" variant="standard" value={todo} onChange={(e) => setTodo(e.target.value)} />
                        <Button variant="contained" color="success" onClick={addTodo}>Add <AddIcon /></Button>
                    </Stack>
                </div>
                <div className="data-display">
                    <div className="data-values heading">
                        <h4>List Item</h4>|
                        <h4>Remove</h4>
                    </div>
                    {
                        todoList.filter((item)=>{
                            if(search === ""){ return item;}
                            else if(item.todo.toLowerCase().includes(search.toLowerCase())) {return item;}
                        }).map((ele, i) => (
                            <div key={i} className="data-values">
                                <p>{ele.todo}</p>
                                <Button onClick={()=>handleClickOpen(i)} color="error" > <DeleteIcon /></Button>
                                    <Dialog
                                        open={open}
                                        onClose={handleCancel}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >  
                                        <DialogTitle id="alert-dialog-title">
                                            Confirm Delete...?
                                        </DialogTitle>
                                        <DialogActions>
                                            <Button onClick={handleCancel}>Cancel</Button>
                                            <Button onClick={RemoveTodo} autoFocus>
                                                Delete
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Todo