import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

// input and button to add new todo item
export default function AddTodo({ handleAddTodo }) {
    const [todoName, setTodoName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (todoName) {
            handleAddTodo(todoName);
            setTodoName("");
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="add-todo-form">
                <input
                    type="text" 
                    value={todoName}
                    className="add-todo-input"
                    placeholder="New todo"
                    onChange={(e) => setTodoName(e.target.value)} />
                <button className="add-todo-btn">
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </form>
        </>
    )
}