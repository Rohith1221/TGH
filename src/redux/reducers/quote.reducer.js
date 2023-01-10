import { createSlice } from "@reduxjs/toolkit";
import {
  generateTags,
  quoteWithTag,
  randomQuote,
  saveTag,
  saveBookmarks,
  deleteBookmark,
} from "../actions/quote.action";
const initialState = {
  loading: true,
  loadingTags: false,
  error: { message: "" },
  count: 0,
  bookmarks: [],
  currQuote: {},
  tags: [],
  selectedtag: "",
  demo: [],
};

const quoteSlice = createSlice({
  name: "quoteReducer",
  initialState,
  reducers: {
    SaveTag: saveTag,
    SaveBookmarks: saveBookmarks,
    DeleteBookmark: deleteBookmark,
  },
  extraReducers(builder) {
    builder
      .addCase(randomQuote.pending, (state) => {
        state.loading = true;
      })
      .addCase(randomQuote.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.currQuote = action.payload;
      })
      .addCase(randomQuote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(generateTags.pending, (state) => {
        state.loadingTags = true;
      })
      .addCase(generateTags.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loadingTags = false;
        state.tags.push(...action.payload);
      })
      .addCase(generateTags.rejected, (state, action) => {
        state.loadingTags = false;
        state.error = action.payload;
      })
      .addCase(quoteWithTag.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.currQuote = action.payload;
        // state.loadingTags = false;
        // state.tags.push(...action.payload);
      });
  },
});

export const { SaveTag, SaveBookmarks, DeleteBookmark } = quoteSlice.actions;
export default quoteSlice.reducer;
