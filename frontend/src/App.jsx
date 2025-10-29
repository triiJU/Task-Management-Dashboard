import { useEffect, useState } from "react";
import { api } from "./api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    api.get("/tasks").then((res) => setTasks(res.data));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h2>Task Management Dashboard</h2>
      <TaskForm refresh={fetchTasks} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
