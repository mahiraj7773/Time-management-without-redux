import React, { useState } from 'react';
import TaskList from './Tasks/tasklist';
import TaskDetails from './Tasks/taskdetails';
import CreateTaskForm from './Tasks/taskform';
// import TaskList from './TaskList';
// import TaskDetails from './TaskDetails';
// import CreateTaskForm from './CreateTaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  // Function to add a new task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Function to update a task
  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    setSelectedTask(null);
  };

  return (
    <div className="App">
      <h1>Task Management App</h1>
      <TaskList tasks={tasks} onSelectTask={setSelectedTask} />
      {selectedTask ? (
        <TaskDetails
          task={selectedTask}
          onUpdateTask={updateTask}
          onDeleteTask={deleteTask}
        />
      ) : (
        <CreateTaskForm onAddTask={addTask} />
      )}
    </div>
  );
}

export default App;
