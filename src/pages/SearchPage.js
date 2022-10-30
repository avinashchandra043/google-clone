import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import useGoogleSearch from "./useGoogleSearch";
import "./SearchPage.css";

function SearchPage({ search }) {
  const { data } = useGoogleSearch(search);
  return (
    <>
      <div className="searchPage">
        <div className="searchPage_header">
          <Link to="/">
            <img
              className="searchPage_logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png"
              alt=""
            />
          </Link>
          <div className="searchPage_header_body">
            <Search hideButtons />
            <div className="searchPage_options">
              <div className="searchPage_options_left">
                <div className="searchPage_option">
                  <SearchIcon />
                  <Link to="/all">All</Link>
                </div>
                <div className="searchPage_option">
                  <DescriptionIcon />
                  <Link to="/news">News</Link>
                </div>
                <div className="searchPage_option">
                  <ImageIcon />
                  <Link to="/image">Images</Link>
                </div>
                <div className="searchPage_option">
                  <LocalOfferIcon />
                  <Link to="/shopping">shopping</Link>
                </div>
                <div className="searchPage_option">
                  <RoomIcon />
                  <Link to="/maps">maps</Link>
                </div>
                <div className="searchPage_option">
                  <MoreVertIcon />
                  <Link to="/more">more</Link>
                </div>
              </div>
              <div className="searchPage_options_right">
                <div className="searchPage_option">
                  <Link to="/setting">Settings</Link>
                </div>
                <div className="searchPage_option">
                  <Link to="/tools">Tools</Link>
                </div>
              </div>
            </div>
          </div>

          {/* <h1>{search}</h1> */}

          {/* http://developers.google.com/custom-search/v1/using_rest */}
          {/* https://cse.google.com/cse/create/new  */}
        </div>
        {search && (
          <div className="searchPage_results">
            <p className="searchPage_resultCount">
              About {data?.searchInformation.formattedTotalResults} results (
              {data?.searchInformation.formattedSearchTime} seconds) for{" "}
              {search}
              {/* About 2000000 results (0.50 seconds) for tesla */}
            </p>
            {data?.items.map((item) => (
              <div className="searchPage_result">
                <a className="searchPage_resultImage" href="{item.link}">
                  {item.pagemap?.cse_image?.length > 0 &&
                    item.pagemap?.cse_image[0]?.src && (
                      <img
                        className="searchPage_result_image"
                        src={item.pagemap?.cse_image[0]?.src}
                        alt=""
                      />
                    )}
                </a>
                <a href="{item.link}">{item.displayLink}▽</a>
                <a className="searchPage_result_Title" href="{item.link}">
                  <h2>{item.title}</h2>
                </a>
                <p className="searchPage_result_Snippet">{item.snippet}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    search: state.my.search,
  };
};

export default connect(mapStateToProps)(SearchPage);
