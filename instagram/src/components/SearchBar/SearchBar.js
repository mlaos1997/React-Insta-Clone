import React from 'react';
import './SearchBar.css';
import { Button } from 'reactstrap';

const SearchBar = props => {
  return (
    <div className="search-bar-wrapper">
      <div className="social-wrapper">
        <div className="social">
          <i className="fab fa-instagram" />
        </div>
      </div>
      <div className="input-wrapper">
        <input
          className="search-input"
          onKeyDown={props.filterPosts}
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
