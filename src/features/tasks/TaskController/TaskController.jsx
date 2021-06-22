import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './TaskController.css';
import TaskList from '../TaskList/TaskList';
import TaskInput from '../TaskInput/TaskInput';
import { addTask } from '../tasksSlice';

const TaskController = () => {
  const dispatch = useDispatch();
  const { allTasks } = useSelector((state) => state.tasks);

  const addTaskToState = (taskTitle) => {
    // TODO
    // Validate
    // Call api to add task
    // Add to task list
    // If successful keep
    // If failed display snack bar with retry button

    dispatch(addTask({ title: taskTitle, repeatable: false }));
  };

  return (
    <div className="task-list">
      {/* Display a form field for task creation */}
      <TaskInput addTask={addTaskToState} />

      <TaskList tasks={allTasks} />
    </div>
  );
};

export default TaskController;
