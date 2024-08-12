import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todosSlice";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function FormTextField() {
  const [inputValue, setInputValue] = useState<string>("");

  const dispatch = useDispatch();

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      event.preventDefault();
      dispatch(addTodo(inputValue));
      setInputValue("");
    }
  };

  return (
    <Box component="form" sx={{ width: "100%" }} noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        label="What needs to be done?"
        variant="standard"
        fullWidth
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
        InputProps={{
          sx: {
            fontSize: { xs: 20, sm: 28 },
          },
        }}
        InputLabelProps={{
          sx: {
            fontSize: { xs: 20, sm: 28 },
          },
        }}
      />
    </Box>
  );
}

export default FormTextField;
