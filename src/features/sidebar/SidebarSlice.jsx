import { createSlice } from '@reduxjs/toolkit';

export const PageEnum = Object.freeze({
    TODO: 1,
    EISENHOWER_BOX: 2,
    // TODO: Rename
    DAY_SCHEDULER: 3,
    WEEK_SCHEDULER: 4,
    MONTH_SCHEDULER: 5,
});

const initialState = {
    // TODO: Get from localstorage/cookie
    currentPage: PageEnum.TODO
};

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        setCurrentPage(state, action) {
            if (Object.values(PageEnum).includes(action.payload)) {
                return {
                    ...state,
                    currentPage: action.payload
                }
            }
        }
    }
});

export const { setCurrentPage } = sidebarSlice.actions;

export default sidebarSlice.reducer;
