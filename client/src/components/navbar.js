import React from "react";

export default function Search({handleInput}) {

  const style = { 
    marginBottom: '5vh',
};  

  return (
    <nav class="navbar navbar-dark bg-dark" style={style}>
      <span class="navbar-brand mb-0 h1">MERN Book Search</span>
    </nav>
  );
}