import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Search from "./Search";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Home() {
  return (
    <div className="home">
      {/* <h1>This is home page</h1> */}
      <div className="home_header">
        <div className="home_header_left">
          <Link to="about">About</Link>
          <Link to="store">Store</Link>
        </div>
        <div className="home_header_right">
          <Link to="gmail">Gmail</Link>
          <Link to="images">Images</Link>
          <AppsIcon />
          {/* icon  */}
          <AccountCircleIcon className="account_avatar" />
          {/* avatar  */}
        </div>
      </div>
      <div className="home_body">
        {/* body */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png"
          alt=""
        />
        <div className="input_container">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
