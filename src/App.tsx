import FormTextField from "./components/formTextField";
import TodoControls from "./components/todoControls";
import TodoList from "./components/todoList";

import "./App.css";

function App() {
  return (
    <>
      <FormTextField />
      <TodoList />
      <TodoControls />
    </>
  );
}

export default App;
