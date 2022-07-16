import React, {useState} from 'react';
import Todos from "./components/Todos";
import Todo from "./models/todo";


import NewTodo from "./components/NewTodo";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);

        setTodos((prevState) => {
            return prevState.concat(newTodo);
        })
    };

    const deleteTodoItemHandler = (todoId: string) => {
        setTodos(prevState => {
            const updatedTodos = prevState.filter(todo => todo.id !== todoId);
            return updatedTodos;
        })
    };

    return (
        <div>
            <NewTodo onAddTodo={addTodoHandler}/>
            <Todos
                items={todos}
                onRemoveTodo={deleteTodoItemHandler}
            />
        </div>
    );
}

export default App;
