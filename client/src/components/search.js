import React from "react";

export default function Search({handleInput}) {

  const style = { 
    marginBottom: '5vh'
  };  
  const label = { 
    marginRight: '10px'
  };  

  return (
    <div className ="searchBar"  style={style}>
        <label style={label}>Search books:</label>
        <input className ="input" id="input" onKeyDown={handleInput}></input>
    </div>
  );
}