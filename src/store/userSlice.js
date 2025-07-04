import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProfile } from '../services/auth';
import { handleApiResponse, handleApiResponseError } from '../utils/apiResponse';

// Thunk pour récupérer le profil utilisateur
export const fetchUserProfile = createAsyncThunk(
  'user/fetchProfile',
  async () => {
    try {
      const response = await getProfile();
      return handleApiResponse(response); // adapte selon la structure de ta réponse
    } catch (error) {
      return handleApiResponseError(error);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    clearProfile: (state) => {
      state.profile = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.profile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { clearProfile } = userSlice.actions;
export default userSlice.reducer;