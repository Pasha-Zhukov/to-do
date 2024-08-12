import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { TodosState, Filter, RootState } from "../interfaces";

const initialState: TodosState = {
  todos: [],
  filter: Filter.All,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    setFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    deleteCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
  },
});

export const { addTodo, toggleTodo, setFilter, deleteTodo, deleteCompleted } =
  todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos.todos;
export const selectFilter = (state: RootState) => state.todos.filter;

export const filteredTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
    if (filter === Filter.Active) {
      return todos.filter((todo) => !todo.completed);
    }
    if (filter === Filter.Completed) {
      return todos.filter((todo) => todo.completed);
    }
    return todos;
  }
);

export const activeTodoCount = createSelector(
  [selectTodos],
  (todos) => todos.filter((todo) => !todo.completed).length
);
export default todosSlice.reducer;
