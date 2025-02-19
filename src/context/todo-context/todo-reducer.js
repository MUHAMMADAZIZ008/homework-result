
export const todoActions = {
    ADD_TODO: 'ADD_TODO',
    UPDATE_TODO: 'UPDATE_TODO',
}


export const todoReducer = (state, action) => {
    switch (action.type) {
        case todoActions.ADD_TODO:
            return { state, todoList: [...state.todoList, action.value] }
        default:
            return state;
    }
}