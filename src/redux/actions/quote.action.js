import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const randomQuote = createAsyncThunk(
  "randomQuote",
  async (payload, { rejectedWithValue }) => {
    try {
      const res = await axios.get("https://api.quotable.io/random");
      return res.data;
    } catch (err) {
      return rejectedWithValue(err);
    }
  }
);
export const generateTags = createAsyncThunk(
  "generateTags",
  async (payload, { rejectedWithValue }) => {
    try {
      const res = await axios.get("https://api.quotable.io/tags");
      //   console.log(...res.data);
      return [...new Set([...res.data])];
    } catch (err) {
      return rejectedWithValue(err);
    }
  }
);

export const quoteWithTag = createAsyncThunk(
  "quoteWithTag",
  async (payload, { rejectedWithValue }) => {
    try {
      const res = await axios.get(
        `https://api.quotable.io/random?tags=${payload}`
      );
      console.log(payload);
      return res.data;
    } catch (err) {
      return rejectedWithValue(err);
    }
  }
);

export const saveTag = (state, action) => {
  // NOT USED
  console.log(action.payload);
  state.selectedtag = action.payload;
};

export const saveBookmarks = (state, action) => {
  // state.bookmarks = [...new Set(state.demo)];
  for (var i = 0; i < state.bookmarks.length; i++) {
    if (
      JSON.stringify(state.bookmarks[i]) === JSON.stringify(state.currQuote)
    ) {
      state.bookmarks.splice(i, 1);
      // console.log("Removed element: " + JSON.stringify(spliced));
      // console.log("Remaining elements: " + JSON.stringify(ok));
    }
  }
  state.bookmarks.push(state.currQuote);
};

export const deleteBookmark = (state, action) => {
  state.bookmarks.splice(action.payload, 1);
};
