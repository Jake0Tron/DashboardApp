import React from "react";
import "./SearchBar.scss";

const SearchBar = ({ value, onChange, onKeyDown }) => {
  return (
    <input
      className="searchBar"
      type="string"
      value={value}
      placeholder="Search for your news topic"
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

export default SearchBar;
