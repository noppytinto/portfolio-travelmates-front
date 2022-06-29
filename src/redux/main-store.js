import {configureStore} from '@reduxjs/toolkit';
import authSlice from './slices/auth-slice';
import userSlice from './slices/user-slice';


const mainStore = configureStore({
    reducer: {
        authSlice: authSlice.reducer,
        userSlice: userSlice.reducer,
    }
});

export default mainStore;