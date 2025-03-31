import React, { useEffect, useState } from "react";
import "./searchBar.css";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [cache, setCache] = useState({});

  function fetchData() {
    if (cache[input]) {
      setResult(cache[input]);
      return;
    }
    fetch(`https://dummyjson.com/recipes/search?q=${input}`)
      .then((res) => res.json())
      .then((data) => {
        setResult(data.recipes);
        setCache((preVal) => ({
          ...preVal,
          [input]: data.recipes,
        }));
      });
  }

  useEffect(() => {
    let timer;

    if (input) {
      timer = setTimeout(() => {
        fetchData(input);
      }, 500);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          type="text"
          value={input}
          placeholder="Enter text to search..."
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          className="btn"
          onClick={() => {
            setInput("");
            setResult([]);
          }}
        >
          Clear
        </button>
        {result.length ? (
          <div className="option_container">
            {result.map((item) => (
              <span
                className="option"
                key={item.id}
                onClick={() => {
                  setInput(item.name);
                  setResult([]);
                }}
              >
                {item.name}
              </span>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
