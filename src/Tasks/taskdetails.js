import React, { useState } from 'react';

function TaskDetails({ task, onUpdateTask, onDeleteTask }) {
  const [status, setStatus] = useState(task.status);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    onUpdateTask({ ...task, status: e.target.value });
  };

  return (
    <div>
      <h2>Task Details</h2>
      <p>Title: {task.title}</p>
      <p>Description: {task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Status:
        <select value={status} onChange={handleStatusChange}>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </p>
      <button onClick={() => onDeleteTask(task.id)}>Delete Task</button>
    </div>
  );
}

export default TaskDetails;
