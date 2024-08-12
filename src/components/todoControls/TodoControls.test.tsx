import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { Filter } from "../../interfaces";

import configureStore from "redux-mock-store";
import TodoControls from "./TodoControls";

import "@testing-library/jest-dom";

const mockStore = configureStore([]);

describe("TodoControls", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      todos: {
        filter: Filter.All,
        todos: [],
      },
    });
    store.dispatch = jest.fn();
  });

  test("renders all buttons correctly", () => {
    render(
      <Provider store={store}>
        <TodoControls />
      </Provider>
    );

    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("Active")).toBeInTheDocument();
    expect(screen.getByText("Completed")).toBeInTheDocument();
    expect(screen.getByText("Clear Completed")).toBeInTheDocument();
  });

  test("dispatches setFilter action when filter button is clicked", () => {
    render(
      <Provider store={store}>
        <TodoControls />
      </Provider>
    );

    fireEvent.click(screen.getByText("Active"));
    expect(store.dispatch).toHaveBeenCalledWith({
      type: "todos/setFilter",
      payload: Filter.Active,
    });

    fireEvent.click(screen.getByText("Completed"));
    expect(store.dispatch).toHaveBeenCalledWith({
      type: "todos/setFilter",
      payload: Filter.Completed,
    });

    fireEvent.click(screen.getByText("All"));
    expect(store.dispatch).toHaveBeenCalledWith({
      type: "todos/setFilter",
      payload: Filter.All,
    });
  });

  test("dispatches deleteCompleted action when Clear Completed button is clicked", () => {
    render(
      <Provider store={store}>
        <TodoControls />
      </Provider>
    );

    fireEvent.click(screen.getByText("Clear Completed"));
    expect(store.dispatch).toHaveBeenCalledWith({
      type: "todos/deleteCompleted",
    });
  });
});
