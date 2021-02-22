import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTodos, deleteTodo, updateTodo } from '../../store/actions/actions'
import TodoItem from '../TodoItem/TodoItem'
import './TodoList.css'



function TodoList({list, fetchTodos, deleteTodo, updateTodo}) {

    useEffect(fetchTodos, [])

    function onTodoClick(element, todo){
        if(!element.classList.contains('delete-item-btn')){
            updateTodo(todo);
        }
    }

    return (
        <div className="todo-list-container">
            {list == false ? '' : list.map((item) => <TodoItem key={item.id} todo={item} onDeleteBtnClick={deleteTodo} onTodoClick={onTodoClick}/>)}
        </div>
    )
}

const mapStateToProps = ({list}) => ({list})

const mapDispatchToProps = {
    fetchTodos,
    deleteTodo,
    updateTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)