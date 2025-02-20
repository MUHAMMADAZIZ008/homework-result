
export const todoActions = {
    ADD_TODO: 'ADD_TODO',
    UPDATE_TODO: 'UPDATE_TODO',
    DELETE_TODO: 'DELETE_TODO',
}


export const todoReducer = (state, action) => {
    switch (action.type) {
        case todoActions.ADD_TODO:
            return { state, todoList: [...state.todoList, action.value] }
        case todoActions.UPDATE_TODO:
            const newTodos = state.todoList.map((item) => item.id === action.value.id ? action.value : item)
            return { ...state, todoList: newTodos }
        case todoActions.DELETE_TODO:
            const deletedTodos = state.todoList.filter((item) => item.id !== action.value.id)
            return { ...state, todoList: deletedTodos }
        default:
            return state;
    }
}