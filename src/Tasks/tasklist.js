import React from 'react';

function TaskList({ tasks, onSelectTask }) {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} onClick={() => onSelectTask(task)}>
            {task.title} - Due: {task.dueDate} - Status: {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
