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
    const filteredItems = searchData.filter(item => {
      const name = item.name.toLowerCase();
      const queryLowerCase = event.target.value.toLowerCase();

      return name.includes(queryLowerCase)
    });
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
            <input
              type="text"
              placeholder="Search for artist..."
              onChange={handleQueryChange}
              value={query}
              
            />
            <MdSearch className="input-search" color="gray" size={20} />
        </div>
      </div>
      {items.length > 0 ? (
        <div className="artist-container">
          {items.map((artist) => (
            <ArtistData artist={artist} darkMode={darkMode} key={artist.id} />
          ))}
        </div>
      ) : (
        <p className={darkMode ? "no-results" : "no-results-light"}>No results found for "{query}"</p>
      )}
    </div>
  );
}

export default Search;
