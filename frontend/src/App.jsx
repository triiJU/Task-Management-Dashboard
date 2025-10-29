import { useEffect, useState } from "react";
import { api } from "./api";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    api.get("/tasks").then(res => setTasks(res.data));
  }, []);

  const addTask = () => {
    api.post("/tasks", { title, project_id: 1 }).then(res => setTasks([...tasks, res.data]));
    setTitle("");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Task Management Dashboard</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="New Task" />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map(t => <li key={t.id}>{t.title} – {t.status}</li>)}
      </ul>
    </div>
  );
}

export default App;
