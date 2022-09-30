import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialStates = {
  loading: false,
  error: false,
  data: null,
  errorMsg: "",
};

// ** Get Data Api
export const getDataApi = createAsyncThunk(
  "getDataApi",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`your_api`, data);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialStates,
  extraReducers: {
    [getDataApi.pending]: (state) => {
      state.loading = true;
    },
    [getDataApi.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [getDataApi.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

const { reducer } = dashboardSlice;

export default reducer;
