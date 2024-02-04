import { createSlice } from "@reduxjs/toolkit";

export type AppConfigState = {
  apiUrl: string;
};

const name = "appConfig";

const initialState: AppConfigState = {
  apiUrl: "/api",
};

export const appConfigSlice = createSlice({
  name,
  initialState,
  reducers: {
    setApiUrl: (state, action) => {
      state.apiUrl = action.payload;
    },
  },
});

export const { setApiUrl } = appConfigSlice.actions;

export default appConfigSlice.reducer;
