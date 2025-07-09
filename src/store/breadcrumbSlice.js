// src/store/breadcrumbSlice.js
import {createSlice} from '@reduxjs/toolkit';

const breadcrumbSlice = createSlice({
    name: 'breadcrumb',
    initialState: {
        items: [
            {label: 'Home', path: '/'}
        ],
        currentPath: '/'
    },
    reducers: {
        addBreadcrumbItem: (state, action) => {
            const {label, path, icon} = action.payload;
            // Vérifier si l'élément existe déjà
            const existingIndex = state.items.findIndex(item => item.path === path);
            if (existingIndex === -1) {
                state.items.push({label, path, icon});
            } else {
                // Tronquer le breadcrumb à partir de cet élément
                state.items = state.items.slice(0, existingIndex + 1);
            }
            state.currentPath = path;
        },
        clearBreadcrumb: (state) => {
            state.items = [{label: 'Home', path: '/'}];
            state.currentPath = '/';
        },
        removeBreadcrumbItem: (state, action) => {
            const path = action.payload;
            const index = state.items.findIndex(item => item.path === path);
            if (index !== -1) {
                state.items = state.items.slice(0, index + 1);
                state.currentPath = state.items[state.items.length - 1].path;
            }
        }
    }
});

export const {
    addBreadcrumbItem,
    setBreadcrumbPath,
    clearBreadcrumb,
    removeBreadcrumbItem
} = breadcrumbSlice.actions;
export default breadcrumbSlice.reducer;