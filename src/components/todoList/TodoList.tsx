import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, filteredTodos } from "../../redux/todosSlice";
import { useCallback } from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import TodoListItem from "../todoListItem";

function TodoList() {
  const dispatch = useDispatch();

  const todos = useSelector(filteredTodos);

  const handleToggle = useCallback(
    (id: number) => dispatch(toggleTodo(id)),
    [dispatch]
  );

  const handleDelete = useCallback(
    (id: number) => dispatch(deleteTodo(id)),
    [dispatch]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <List>
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))}
      </List>
    </Box>
  );
}

export default TodoList;
