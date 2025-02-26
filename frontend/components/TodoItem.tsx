import { useState } from "react";
import { Todo } from "@/types/todos";
import { Card, Typography, IconButton, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoItem: React.FC<Todo> = ({
  id,
  title,
  completed,
  onUpdate,
  onDelete,
}) => {
  const [isCompleted, setIsCompleted] = useState(completed);

  const handleToggle = () => {
    const newCompleted = !isCompleted;
    setIsCompleted(newCompleted);
    onUpdate(id, newCompleted);
  };

  return (
    <div className="flex justify-center">
      <Card
        sx={{
          width: "70dvw",
          height: "auto",
          display: "flex",
          flexDirection: "row", // Always in row direction
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: "2vmin",
          paddingY: "1vmin",
          mb: "2vmin",
          bgcolor: "#b3e5fc",
        }}
      >
        <Typography
          sx={(theme) => ({
            fontSize: "2.5vmin",
            textDecoration: isCompleted ? "line-through" : "none",
            color: isCompleted ? "gray" : "black",
            [theme.breakpoints.down("sm")]: {
              fontSize: "4dvw",
            },
          })}
        >
          {title}
        </Typography>
        <Stack direction="row" sx={{ gap: "0%" }}>
          <IconButton
            onClick={handleToggle}
            color={isCompleted ? "success" : "default"}
          >
            <CheckCircleIcon />
          </IconButton>
          <IconButton onClick={() => onDelete(id)} color="error">
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Card>
    </div>
  );
};

export default TodoItem;
