import api from '../../api'



// export const SET_STICKERS = 'SET_STICKERS'
// export const fetchStickers = () => (dispatch) => {
//     api.get('/').then(({data}) => dispatch({type: SET_STICKERS, payload: data}))
// }

export const SET_TODOS = 'SET_TODOS'
export const fetchTodos = () => (dispatch) => {
    api.get('/').then(({data}) => dispatch({type: SET_TODOS, payload: data}))
}

export const DELETE_TODO = 'DELETE_TODO'
export const deleteTodo = (id) => (dispatch) => {
    api.delete('/' + id).then(({data}) => dispatch({type: DELETE_TODO, payload: data.id}))
}

export const ADD_TODO = 'ADD_TODO'
export const addTodo = (values) => (dispatch) => {
    const newTodo = {
        description: values.description,
        isDone: false,
    }
    api.post('/', newTodo).then(({data}) => dispatch({type: ADD_TODO, payload: data}))
}

export const UPDATE_TODO = 'UPDATE_TODO'
export const updateTodo = (todo) => (dispatch) => {
    const newTodo = {
        ...todo,
        isDone: !todo.isDone,
    }
    api.put('/' + todo.id, newTodo).then(({data}) => dispatch({type: UPDATE_TODO, payload: data}))
}