// src/store/breadcrumbSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Types pour les éléments de breadcrumb
interface BreadcrumbItem {
    label: string;
    path: string;
    icon?: string;
}

// Type pour l'état du breadcrumb
interface BreadcrumbState {
    items: BreadcrumbItem[];
    currentPath: string;
}

const initialState: BreadcrumbState = {
    items: [
        {label: 'Home', path: '/'}
    ],
    currentPath: '/'
};

const breadcrumbSlice = createSlice({
    name: 'breadcrumb',
    initialState,
    reducers: {
        addBreadcrumbItem: (state, action: PayloadAction<BreadcrumbItem>) => {
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
        removeBreadcrumbItem: (state, action: PayloadAction<string>) => {
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
    clearBreadcrumb,
    removeBreadcrumbItem
} = breadcrumbSlice.actions;
export default breadcrumbSlice.reducer; 