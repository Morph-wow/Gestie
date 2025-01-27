"use client";

import { useState } from "react";

export default function TaskComponent() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Completa il progetto", completed: false },
    { id: 2, title: "Invia email al team", completed: true }
  ]);

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h2>Task</h2>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              textDecoration: task.completed ? "line-through" : "none"
            }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
