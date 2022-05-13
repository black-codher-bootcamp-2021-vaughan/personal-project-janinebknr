import React from "react";

const Search = (props) => {
  const handleChange = (event) => {
    props.setSearchTerm(event.target.value);
    props.search(props.searchTerm);
  };

  return (
    <div className="searchBar container">
      <form>
        <label>
          <input
            type="text"
            id="search"
            placeholder="Enter Member ID"
            onChange={handleChange}
          />
        </label>
      </form>
      <p className="searchingFor">
        {props.searchTerm && "Searching for terms: " + props.searchTerm}
      </p>
    </div>
  );
};

export default Search;
