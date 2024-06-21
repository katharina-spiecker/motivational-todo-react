import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import quotes from "../assets/quotes.js";

// stores todos
export default function TodoBox() {
    const [randomQuote, setRandomQuote] = useState("");
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const randIndex = Math.floor(Math.random() * quotes.length);
        setRandomQuote(quotes[randIndex]);
    }, []);

    function handleAddTodo(todoName) {
        setTodos([
            ...todos,
            {
                name: todoName,
                id: Math.floor(Math.random() * 10000)
            }
        ]);
    }

    function handleCompleteTodo(index) {
        const newTodos = [...todos];
        newTodos[index].completed = true;
        setTodos(newTodos);
    }

    function handleDeleteTodo(index) {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <div className="todo-box">
            <h1 className="quote">{ randomQuote }</h1>
            <AddTodo handleAddTodo={handleAddTodo}/>
            {
                todos.map((todo, index) => 
                    <TodoItem
                        key={index}
                        todo={todo} 
                        index={index}
                        handleCompleteTodo={handleCompleteTodo}
                        handleDeleteTodo={handleDeleteTodo}
                    />
                )
            }
        </div>
    )
}