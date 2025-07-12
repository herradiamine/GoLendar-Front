import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';

export const Store = configureStore({
    reducer: {
        user: userReducer,
    },
});

// Types pour le store
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch; 