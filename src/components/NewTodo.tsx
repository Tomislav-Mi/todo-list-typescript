import React from 'react';
import {useRef} from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        // Validating the entered Text
        if (enteredText.trim().length === 0) {
            return; // I could throw an error here
        }

        props.onAddTodo(enteredText);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <label htmlFor="text"><h1>What I need to do</h1></label>
            <input type="text" id="text" ref={todoTextInputRef}/>
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;