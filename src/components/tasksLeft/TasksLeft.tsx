import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { activeTodoCount } from "../../redux/todosSlice";

function TasksLeft() {
  const tasksLeft = useSelector(activeTodoCount);

  return (
    <Typography color="text.secondary" variant="body1">
      {tasksLeft} tasks left
    </Typography>
  );
}

export default TasksLeft;
