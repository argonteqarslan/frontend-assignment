import React from 'react';
import { useDispatch } from 'react-redux';

import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from '@material-ui/core';
import { Send } from '@material-ui/icons';

import { addTask, updateTask } from '../../store/actions/todoActions';

const useStyles = makeStyles({
    formStyle: {
        margin: "0px auto",
        padding: "30px",
        borderRadius: "9px",
        boxShadow: "0px 0px 12px -3px #000000",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "150px",
        backgroundColor: "#fff685"
    },
    submitButton: {
        marginLeft: "20px",
    }
});

const AddTask = ({ todo, setTodo }) => {
    const classes = useStyles();
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        if (todo._id) {
            const id = todo._id;
            const updatedTodo = {
                name: todo.name,
                description: todo.description
            }

            dispatch(updateTask(updatedTodo, id));

        } else {
            const newTodo = {
                ...todo,
                date: new Date()
            }

            dispatch(addTask(newTodo));
        }
        setTodo({ name: '', isComplete: false });
    }

    return (
        <>
            <form noValidate autoComplete="off" className={classes.formStyle} onSubmit={handleSubmit}>
                <TextField
                    id="enter-todo"
                    label="create a new task"
                    variant="outlined"
                    autoFocus
                    fullWidth
                    value={todo.name}
                    onChange={(e) => setTodo({ ...todo, name: e.target.value })}
                />
                <Button variant="contained" color="primary" className={classes.submitButton} type="submit">
                   create
                </Button>
            </form>
        </>
    );
}

export default AddTask;