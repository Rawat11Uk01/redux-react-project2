import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TopFold.css";
function TopFold() {
  const [query, setQuery] = useState("");
  const handleQuery = (event) => {
    setQuery(event.target.value);
  };
  console.log(query);
  return (
    <div className="topFold">
      {window.location.pathname === "/" ? (
        <div className="home-topFold">
          <div className="searchBar">
            <input
              placeholder="Search For Expenses"
              value={query}
              onChange={handleQuery}
            />
          </div>
          <Link to="/add-expense">
            <div className="add-button">
              <button>Add</button>
            </div>
          </Link>
        </div>
      ) : (
        <div className="add-topFold">
          <Link to='/'>
            <div className="add-topfold-button">
              <button>Back</button>
            </div>
          </Link>
          <Link to='/'>
            <div className="add-topfold-button">
              <button>cancel</button>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default TopFold;
