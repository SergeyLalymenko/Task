import React from 'react'
import './TodoItem.css'



function TodoItem({todo, onDeleteBtnClick, onTodoClick}) {
    return (
        <div className={todo.isDone ? "todo-item-container todo-item-done" : "todo-item-container"} onClick={(e) => onTodoClick(e.target, todo)}>
            <div>{todo.description}</div>
            <div className="delete-item-btn" onClick={(e) => onDeleteBtnClick(todo.id)}>X</div>
        </div>
    )
}

export default TodoItem
