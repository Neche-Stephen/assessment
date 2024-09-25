import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, fetchAuthenticatedUser } from '../services/authService';

// Login action
export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const data = await loginUser(credentials);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Fetch authenticated user after login
export const getAuthenticatedUser = createAsyncThunk('auth/getAuthenticatedUser', async (token, { rejectWithValue }) => {
  try {
    const data = await fetchAuthenticatedUser(token);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
    userDetails: null, // Store authenticated user's full details
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.userDetails = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.accessToken; 
        state.user = action.payload; // Store basic user details from login
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handle fetching full authenticated user data
      .addCase(getAuthenticatedUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAuthenticatedUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userDetails = action.payload; // Store full authenticated user details
      })
      .addCase(getAuthenticatedUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
