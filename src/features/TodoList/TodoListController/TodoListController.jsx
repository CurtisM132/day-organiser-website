import React from 'react';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import TodoListContainer from '../TodoListContainer/TodoListContainer';

/**
 * The Todo List visual component
 */
const ToDoListController = () => {
  // TODO: Move selector to container component
  const { allTasks } = useSelector((state) => state.tasks);

  return (
    <Card className="todo-list-card" variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h5">
          To Do List
        </Typography>

        <TodoListContainer tasks={allTasks} />
      </CardContent>
    </Card>
  );
};

export default ToDoListController;