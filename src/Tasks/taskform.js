import React, { useState } from 'react';

function CreateTaskForm({ onAddTask }) {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    status: 'To Do',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { ...task, id: Date.now().toString() };
    onAddTask(newTask);
    setTask({
      title: '',
      description: '',
      dueDate: '',
      status: 'To Do',
    });
  };

  return (
    <div>
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          style={{display:'flex'}}
          type="text"
          name="title"
          placeholder="Title"
          value={task.title}
          onChange={handleChange}
          required
        />
        <textarea
        style={{display:'flex'}}
          name="description"
          placeholder="Description"
          value={task.description}
          onChange={handleChange}
        />
        <input
        style={{display:'flex'}}
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          required
        />
        <select
         name="status"
         style={{display:'flex'}}
          value={task.status}
           onChange={handleChange}
            >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default CreateTaskForm;
