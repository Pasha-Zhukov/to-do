import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { addTodo } from "../../redux/todosSlice";

import configureStore from "redux-mock-store";
import FormTextField from "./FormTextField";

import "@testing-library/jest-dom";

const mockStore = configureStore([]);

describe("FormTextField", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      todos: { todos: [] },
    });
    store.dispatch = jest.fn();
  });

  test("renders input field correctly", () => {
    render(
      <Provider store={store}>
        <FormTextField />
      </Provider>
    );

    const inputElement = screen.getByLabelText(/What needs to be done?/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("updates input value on change", () => {
    render(
      <Provider store={store}>
        <FormTextField />
      </Provider>
    );

    const inputElement = screen.getByLabelText(/What needs to be done?/i);

    fireEvent.change(inputElement, { target: { value: "New Task" } });

    expect(inputElement).toHaveValue("New Task");
  });

  test("dispatches addTodo and clears input on Enter key press", () => {
    render(
      <Provider store={store}>
        <FormTextField />
      </Provider>
    );

    const inputElement = screen.getByLabelText(/What needs to be done?/i);

    fireEvent.change(inputElement, { target: { value: "New Task" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    expect(store.dispatch).toHaveBeenCalledWith(addTodo("New Task"));
    expect(inputElement).toHaveValue("");
  });

  test("does not dispatch addTodo on Enter key press if input is empty", () => {
    render(
      <Provider store={store}>
        <FormTextField />
      </Provider>
    );

    const inputElement = screen.getByLabelText(/What needs to be done?/i);

    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    expect(store.dispatch).not.toHaveBeenCalled();
  });
});
