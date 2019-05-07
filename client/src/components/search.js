import React from "react";

export default function Search({handleInput}) {

  const style = { 
    color: 'white'
  };  
  const label = { 
    marginRight: '10px'
  };
  const input = {
    marginTop: '5vh'
  }

  return (
    <div className ="searchBar"  style={style}>
        <label style={label}>Search books:</label>
        <input className ="input" id="input" onKeyDown={handleInput} ></input>
    </div>
  );
}