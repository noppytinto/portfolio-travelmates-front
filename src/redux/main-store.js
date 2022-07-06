import {configureStore} from '@reduxjs/toolkit';
import authSlice from './slices/auth-slice';
import userSlice from './slices/user-slice';
import dragAndDropSlice from './slices/drag-and-drop-slice';


const mainStore = configureStore({
    reducer: {
        authSlice: authSlice.reducer,
        userSlice: userSlice.reducer,
        dragAndDropSlice: dragAndDropSlice.reducer,
    }
});

export default mainStore;