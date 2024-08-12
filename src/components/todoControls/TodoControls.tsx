import { useDispatch, useSelector } from "react-redux";
import {
  deleteCompleted,
  selectFilter,
  setFilter,
} from "../../redux/todosSlice";
import { Filter } from "../../interfaces";

import TasksLeft from "../tasksLeft";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function TodoControls() {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  const handleFilterChange = (newFilter: Filter) =>
    dispatch(setFilter(newFilter));

  const buttonVariant = (filterToCheck: Filter) =>
    filter === filterToCheck ? "outlined" : "text";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        padding: 2,
        gap: 1,
      }}
    >
      <TasksLeft />
      <Box>
        <Button
          onClick={() => handleFilterChange(Filter.All)}
          variant={buttonVariant(Filter.All)}
        >
          All
        </Button>
        <Button
          onClick={() => handleFilterChange(Filter.Active)}
          variant={buttonVariant(Filter.Active)}
        >
          Active
        </Button>
        <Button
          onClick={() => handleFilterChange(Filter.Completed)}
          variant={buttonVariant(Filter.Completed)}
        >
          Completed
        </Button>
      </Box>
      <Button variant="contained" onClick={() => dispatch(deleteCompleted())}>
        Clear Completed
      </Button>
    </Box>
  );
}

export default TodoControls;
