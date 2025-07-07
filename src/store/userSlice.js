import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getProfile} from '../services/auth';

// Thunk pour récupérer le profil utilisateur
export const fetchUserProfile = createAsyncThunk(
    'user/fetchUserProfile',
    async () => {
        return await getProfile();
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        response: null,
        status: 'idle',
        error: null,
    },
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
            .addCase(fetchUserProfile.fulfilled, (state, action) => {
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