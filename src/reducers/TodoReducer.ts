import {Action} from "../models/Action";
import {Todo} from "../models/Todo";

export const ADD_TODO = 'add';
export const REMOVE_TODO = 'remove';


interface AppState {
    todos: Todo[]
}

export const reducer = (state: AppState, action: Action): AppState => {
    switch (action.type) {
        case ADD_TODO:
            return { todos: [...state.todos, action.payload] };
        case REMOVE_TODO:
            const newTodos = [...state.todos];
            const selectedIndex = newTodos.findIndex(e => e.id === action.payload.id);
            newTodos.splice(selectedIndex, 1);
            return { todos: newTodos };
        default:
            return state;
    }
};