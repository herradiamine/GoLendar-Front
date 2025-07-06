import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import breadcrumbReducer from './breadcrumbSlice';

export const Store = configureStore({
  reducer: {
    user: userReducer,
    breadcrumb: breadcrumbReducer,
  },
});