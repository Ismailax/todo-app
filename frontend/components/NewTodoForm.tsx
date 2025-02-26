import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface NewTodoFormProps {
  onAddTodo: (title: string) => void;
}

const NewTodoForm: React.FC<NewTodoFormProps> = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddTodo(title);
    setTitle("");
  };

  return (
    <div className="flex justify-center mb-[2dvh]">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          gap: "2%",
          width: "70%",
          marginBottom: "2vmin",
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter new todo..."
          sx={{
            "& .MuiInputBase-root": {
              height: "6dvh",
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            fontWeight: "bold",
            height: "6dvh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AddIcon />
        </Button>
      </Box>
    </div>
  );
};

export default NewTodoForm;
