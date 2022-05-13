import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.search(props.searchTerm);
  };

  return (
    <div className="searchBar container">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            id="search"
            placeholder="Enter Member ID"
            onChange={(event) => props.setSearchTerm(event.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <p className="searchingFor">
        {props.searchTerm && "Searching for terms: " + props.searchTerm}
      </p>
    </div>
  );
};

export default Search;
