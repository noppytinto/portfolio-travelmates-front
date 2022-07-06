import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    eventIndex: -1
};

const dragAndDropSlice = createSlice({
    name: 'dragAndDropSlice',
    initialState,
    reducers: {
        setData(state, action) {
            state.eventIndex = action.payload.eventIndex;
        },

    },
});


export default dragAndDropSlice;

// export actions
export const dragAndDropActions = dragAndDropSlice.actions;