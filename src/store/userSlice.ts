import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {getProfile} from '../services/auth';

// Types pour l'état utilisateur
interface UserState {
    response: any;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: any;
}

// Thunk pour récupérer le profil utilisateur
export const fetchUserProfile = createAsyncThunk(
    'user/fetchUserProfile',
    async () => {
        return await getProfile();
    }
);

const initialState: UserState = {
    response: null,
    status: 'idle',
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearProfile: (state) => {
            state.response = null;
            state.status = 'idle';
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserProfile.pending, (state) => {
                state.status = 'loading';
                state.response = null;
                state.error = null;
            })
            .addCase(fetchUserProfile.fulfilled, (state, action: PayloadAction<any>) => {
                state.status = 'succeeded';
                state.response = action.payload;
                state.error = null;
            })
            .addCase(fetchUserProfile.rejected, (state, action) => {
                state.status = 'failed';
                state.response = null;
                state.error = action.payload;
            });
    },
});

export const {clearProfile} = userSlice.actions;
export default userSlice.reducer; 