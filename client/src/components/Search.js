import React, { useState } from "react";

const Search = () => {
  // const [memberId, setMemberId] = useState();
  const [searchTerm, setSearchTerm] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    console.log("I'm submitting this form", searchTerm);
    // Call a function to pass the member Id i'm searching for to the App.js, so that the App.js can filter
  }

  return (
    <div className="searchBar container">
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          <input
            type="text"
            id="search"
            placeholder="Enter Member ID"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
