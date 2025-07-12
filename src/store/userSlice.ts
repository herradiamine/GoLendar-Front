import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {getProfile, logout} from '@/services/auth';
import {ApiResponse} from "@/utils/apiResponse";

// Types pour l'état utilisateur
interface UserState {
    response: ApiResponse;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: ApiResponse;
}

// Thunk pour récupérer le profil utilisateur
export const fetchUserProfile = createAsyncThunk(
    'user/fetchUserProfile',
    async () => {
        return await getProfile();
    }
);

// Thunk pour la déconnexion
export const logoutUser = createAsyncThunk(
    'user/logoutUser',
    async () => {
        return await logout();
    }
);

const initialState: UserState = {
    response: {} as ApiResponse,
    status: 'idle',
    error: {} as ApiResponse,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearProfile: (state) => {
            state.response = {} as ApiResponse;
            state.status = 'idle';
            state.error = {} as ApiResponse;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserProfile.pending, (state) => {
                state.status = 'loading';
                state.response = {} as ApiResponse;
                state.error = {} as ApiResponse;
            })
            .addCase(fetchUserProfile.fulfilled, (state, action: PayloadAction<ApiResponse>) => {
                state.status = 'succeeded';
                state.response = action.payload;
                state.error = {} as ApiResponse;
            })
            .addCase(fetchUserProfile.rejected, (state, action) => {
                state.status = 'failed';
                state.response = {} as ApiResponse;
                state.error = action.payload as ApiResponse || {} as ApiResponse;
            })
            .addCase(logoutUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.status = 'idle';
                state.response = {} as ApiResponse;
                state.error = {} as ApiResponse;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as ApiResponse || {} as ApiResponse;
            });
    },
});

export const {clearProfile} = userSlice.actions;
export default userSlice.reducer;