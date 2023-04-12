import React, { useState } from "react";
import {
  MdArrowBackIosNew,
  MdArrowForwardIos,
  MdSearch,
  MdDarkMode,
  MdLightMode,
} from "react-icons/md";
import "./app.css";
import searchData from "../Searchdata";
import ArtistData from "../Artist/ArtistData";

function Search({ darkMode, handleMode }) {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState(searchData);

  const handleQueryChange = event => {
    setQuery(event.target.value);
  };

  const handleSearch = event => {
    event.preventDefault(); // prevent the form from submitting and reloading the page

    const filteredItems = items.filter(item => {
      const name = item.name.toLowerCase();
      const queryLowerCase = query.toLowerCase();

      return name.includes(queryLowerCase)
    });

    // update the items state variable with the filtered items
    setItems(filteredItems);
  };

  return (
    <div className={darkMode ? "search-body" : "search-body-light"}>
      {darkMode ? (
        <MdDarkMode
          size={20}
          color="white"
          className="mode"
          onClick={handleMode}
        />
      ) : (
        <MdLightMode
          size={20}
          color="white"
          className="mode"
          onClick={handleMode}
        />
      )}
      <div className="search-nav">
        <MdArrowBackIosNew
          size={20}
          color={darkMode ? "white" : "black"}
          className="search-arrow"
        />
        <MdArrowForwardIos
          size={20}
          color={darkMode ? "white" : "black"}
          className="search-arrow"
        />
        <div className={darkMode ? "search-input" : "search-input-light"}>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search for artist..."
              onChange={handleQueryChange}
              value={query}
            />
            {/* <MdSearch className="input-search" color="gray" size={20} /> */}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="artist-container">
        {searchData.map((artist) => (
          <ArtistData artist={artist} darkMode={darkMode} key={artist.id} />
        ))}{" "}
      </div>
    </div>
  );
}

export default Search;
