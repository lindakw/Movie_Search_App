import React from 'react';
import "./Nav.css";

const Nav = (props) => {
    return (
        <div className="navContainer">
            <h1>Movie Search</h1>
            <div className="formContainer">
            <input
                onChange={(e) => {
                props.setSearchText(e.target.value);
                }}
                className="searchInput"
                type="text"
            />
            <button onClick={() => props.getMovie()} className="searchBtn">
            Submit
            </button>
            </div>
        </div>
    )
}

export default Nav
