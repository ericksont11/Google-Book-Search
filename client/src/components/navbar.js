import React from "react";
import Search from "./search";
import { Link } from "react-router-dom";

export default function Navbar({handleInput, page}) {


  return (
    <nav className="navbar navbar-dark bg-dark" >
      <span className="navbar-brand mb-0 h1">MERN Book Search</span>

        {!page ? (
          <>
            <Link to="/books/saved" className={window.location.pathname === "/books/saved"}>Go to saved articles</Link>
            <div>
              <Search
                handleInput = {handleInput}
              />
             </div>
          </>
        ) : (
          <Link to="/" className={window.location.pathname === "/"}>Return to Search</Link>
        )}

    </nav>

  );
}