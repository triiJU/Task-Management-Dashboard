function TaskList({ tasks }) {
  return (
    <div style={{ marginTop: "1.5rem" }}>
      <h4>Tasks</h4>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            {t.title} – <i>{t.status}</i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
