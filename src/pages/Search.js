import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";

import { connect } from "react-redux";
import { changeSearch } from "../store/searchKey/myAction";

function Search({
  searchValueOfRedux,
  hideButtons = false,
  changeSearchValue,
}) {
  // console.log(hideButtons.valueOf);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const search = (e) => {
    e.preventDefault();
    if (input !== "") {
      navigate("/search");
      console.log(">>", input);
      searchValueOfRedux = input;
      // console.log("changeSearchValue(input) ", changeSearchValue(input));
      changeSearchValue(input);
    }
  };

  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search_buttons">
          <button type="submit" onClick={search} z>
            Google Search
          </button>
          <button>I'm Feeling Lucky</button>
        </div>
      ) : (
        <div className="search_buttons">
          <button
            className="search_buttons_hidden"
            type="submit"
            onClick={search}
          >
            Google Search
          </button>
          <button className="search_buttons_hidden">I'm Feeling Lucky</button>
        </div>
      )}
    </form>
  );
}
const mapStateToProps = (state) => {
  return {
    searchValueOfRedux: state.my.search,
  };
};
const mapDispatchToProps = (dispatch) => {
  return { changeSearchValue: (search) => dispatch(changeSearch(search)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
