import { createSlice } from '@reduxjs/toolkit'
import Task from '../../objects/Task'

// TODO: Remove
let nextTaskId = 4

export const initialState = {
    // TODO: Remove dummy data
    allTasks: [new Task(0, 'Example Task 1'), new Task(1, 'Example Task 2'), new Task(2, 'Example Task 3')],
    eisenhowerTasks: {
        do: [],
        decide: [],
        delegate: [],
        delete: []
    }
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(state, action) {
            const { title, repeatable } = action.payload;
            state.allTasks.push(new Task(nextTaskId++, title, false, repeatable));
        }
    }
})

export const { addTask, toggleTaskCompletion } = tasksSlice.actions;

export default tasksSlice.reducer;
