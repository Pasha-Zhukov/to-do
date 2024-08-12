import { render, screen, fireEvent } from "@testing-library/react";
import { Todo } from "../../interfaces";

import TodoListItem from "./TodoListItem";

import "@testing-library/jest-dom";

describe("TodoListItem", () => {
  const mockTodo: Todo = {
    id: 1,
    text: "Test Todo",
    completed: false,
  };

  const mockHandleDelete = jest.fn();
  const mockHandleToggle = jest.fn();

  test("handles toggle correctly", () => {
    render(
      <TodoListItem
        todo={mockTodo}
        handleDelete={mockHandleDelete}
        handleToggle={mockHandleToggle}
      />
    );

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(mockHandleToggle).toHaveBeenCalledWith(mockTodo.id);
  });

  test("handles delete correctly", () => {
    render(
      <TodoListItem
        todo={mockTodo}
        handleDelete={mockHandleDelete}
        handleToggle={mockHandleToggle}
      />
    );

    const deleteButton = screen.getByLabelText("delete");
    fireEvent.click(deleteButton);

    expect(mockHandleDelete).toHaveBeenCalledWith(mockTodo.id);
  });
});
