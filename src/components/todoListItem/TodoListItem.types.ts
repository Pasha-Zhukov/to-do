import { Todo } from "@/interfaces";

export interface TodoListItemProps {
  todo: Todo;
  handleDelete: (id: number) => void;
  handleToggle: (id: number) => void;
}
