export interface RootState {
  todos: TodosState;
  filter: Filter;
  activeTodoCount: number;
  completedTodoCount: number;
}
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export enum Filter {
  All = "all",
  Active = "active",
  Completed = "completed",
}

export interface TodosState {
  todos: Todo[];
  filter: Filter;
}
