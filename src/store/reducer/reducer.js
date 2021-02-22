import { SET_TODOS, DELETE_TODO, ADD_TODO, UPDATE_TODO } from '../actions/actions'

const initialState = {
    list: [],
}

export default function reducer(state = initialState, {type, payload}){
    switch(type){
        case SET_TODOS: return {...state, list: payload}

        case DELETE_TODO: return {...state, list: state.list.filter((item) => item.id != payload)}

        case ADD_TODO: return {...state, list: [...state.list, payload]}

        case UPDATE_TODO: return {...state, list: state.list.map((item) => item.id === payload.id ? payload : item)}

        default: return state
    }
}