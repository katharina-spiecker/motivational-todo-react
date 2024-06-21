import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

// individual Todo List item
export default function TodoItem({ todo, handleCompleteTodo, handleDeleteTodo, index }) {
    return (
        <>
            <div className="todo">
                <p
                    className={ todo.completed ? 'todo-closed' : 'todo-incomplete'}
                    onClick={() => handleCompleteTodo(index)}>
                    {todo.name}
                </p>
                <FontAwesomeIcon
                    className='cursor-pointer'
                    icon={faTrash}
                    onClick={() => handleDeleteTodo(index)}
                />
            </div>
        </>
    )
}