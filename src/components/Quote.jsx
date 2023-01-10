import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  generateTags,
  randomQuote,
  quoteWithTag,
} from "../redux/actions/quote.action";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import {
  SaveTag,
  SaveBookmarks,
  DeleteBookmark,
} from "../redux/reducers/quote.reducer";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { current } from "@reduxjs/toolkit";
import { Book, Delete } from "@mui/icons-material";

import "./css/Quote.css";

function Quote() {
  const [tag, setTag] = React.useState("");

  const handleChange = (event) => {
    setTag(event.target.value);
  };

  // api.quotable.io/random

  // loading: false,
  //   error: { message: "" },
  //   count: 0,
  //   bookmarks: [],
  //   currQuote: {},
  //   tags: [],

  const { currQuote, tags, loadingTags, selectedtag, bookmarks, loading } =
    useSelector((state) => state.quoteReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(randomQuote());
    dispatch(generateTags());
  }, []);

  const handleClick = () => {};
  return (
    <div>
      <div className="quote_box" sx={{ width: "500px" }}>
        {/* <p className="qb_quote">{currQuote.content}</p> */}
        <p className="qb_quote">
          {loading ? <i>loading ...</i> : currQuote.content}
        </p>
        <div className="qb_secondLine">
          <div className="qb_author">
            {loading ? "" : "-" + currQuote.author}
          </div>
          <div className="qb_bookmark">
            {!loading && (
              <BookmarkAddIcon onClick={() => dispatch(SaveBookmarks())} />
            )}
          </div>
          {/* <p className="qb_bookmark"></p> */}
        </div>
      </div>
      <FormControl sx={{ width: 300, color: "white" }}>
        <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>
          Tags
        </InputLabel>
        <Select
          sx={{ color: "white" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tag}
          label="Tags"
          onChange={handleChange}
        >
          {tags.map((item, index) => {
            {
              loadingTags && <MenuItem value="loading"> Loading...</MenuItem>;
            }
            return (
              <MenuItem
                sx={{ color: "black" }}
                key={index}
                value={item.name}
                onClick={(e) =>
                  dispatch(quoteWithTag(e.target.getAttribute("data-value")))
                }
              >
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <p>
        <br></br>
        <Button
          variant="contained"
          onClick={() => dispatch(randomQuote())}
          sx={{ color: "white", background: "#3cb371", borderRadius: "20px" }}
        >
          Next Quote
        </Button>
      </p>
    </div>
  );
}
export default Quote;
