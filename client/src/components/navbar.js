import React from "react";

export default function Search({handleInput}) {

  return (
    <div className ="searchBar">
        <input className ="input" id="input" onKeyDown={handleInput}></input>
    </div>
  );
}