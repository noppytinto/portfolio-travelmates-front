import {configureStore} from '@reduxjs/toolkit';
import authSlice from './slices/auth-slice';


const mainStore = configureStore({
    reducer: {
        authSlice: authSlice.reducer,
    }
});

export default mainStore;