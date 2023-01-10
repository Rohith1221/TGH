import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteBookmark } from "../redux/reducers/quote.reducer";
import "./css/Bookmarks.css";

function Bookmarks(props) {
  const dispatch = useDispatch();
  const { bookmarks } = useSelector((state) => state.quoteReducer);

  return (
    <div>
      {bookmarks.map((item, index) => {
        return (
          <div className="quote_box" sx={{ width: "500px" }}>
            <p className="qb_quote">{item.content}</p>
            <div className="qb_secondLine">
              <div className="qb_author">-{item.author}</div>
              <div className="qb_bookmark"></div>
              <br></br>
            </div>
            <button
              className="del_btn"
              value={index}
              onClick={(e) => dispatch(DeleteBookmark(e.target.value))}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Bookmarks;
