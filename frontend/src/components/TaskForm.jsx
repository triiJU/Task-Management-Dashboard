import { useState } from "react";
import { api } from "../api";

function TaskForm({ refresh }) {
  const [title, setTitle] = useState("");

  const addTask = () => {
    if (!title.trim()) return;
    api.post("/tasks", { title }).then(() => {
      setTitle("");
      refresh();
    });
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <input
        type="text"
        value={title}
        placeholder="Enter task title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default TaskForm;
