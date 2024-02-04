import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Part, fetchPart } from "../api/partApi";
import { RootState } from "../../App/redux/store";

export type LoadingStatus = "idle" | "loading" | "succeeded" | "failed";

export type PartEditorState = {
  status: LoadingStatus;
  part: Part | undefined;
};

const name = "partEditor";

const initialState: PartEditorState = {
  status: "idle",
  part: undefined,
};

export const setPart = createAsyncThunk<Part, string, { state: RootState }>(
  name + "/setPart",
  async (partId: string, { getState }) => {
    return await fetchPart(getState(), partId);
  },
);

export const partEditorSlice = createSlice({
  name,
  initialState,
  reducers: {
    // Add standard reducers here.
  },
  extraReducers: (builder) => {
    builder.addCase(setPart.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(setPart.rejected, (state) => {
      state.status = "failed";
    });
    builder.addCase(setPart.fulfilled, (state, action) => {
      state.part = action.payload;
      state.status = "succeeded";
    });
  },
});

export const selectPart = (state: RootState) => state.partEditor.part;

export const selectStatus = (state: RootState) => state.partEditor.status;

export default partEditorSlice.reducer;
