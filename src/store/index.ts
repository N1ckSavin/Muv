import {configureStore} from '@reduxjs/toolkit';
import { type } from 'os';
import userReducer from './slices/userSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
