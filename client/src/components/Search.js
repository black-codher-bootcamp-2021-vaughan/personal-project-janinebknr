import React from "react";
// import { FaSearch } from "react-icons/fa";

const Search = (props) => {
  const handleChange = (event) => {
    props.search(props.searchTerm);
    event.persist();
    props.setSearchTerm(event.target.value);
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
