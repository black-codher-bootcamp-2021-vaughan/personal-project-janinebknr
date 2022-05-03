import React from "react";

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
      <p>
        <em>
          {props.searchTerm && "Searching for terms: " + props.searchTerm}
        </em>
      </p>
    </div>
  );
};

export default Search;
