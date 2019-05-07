import React from "react";

export default function Intro() {

 const style= {
    height: '80vh'
 }

  return (
    <div className="jumbotron jumbotron-fluid" style={style}>
        <div className="container">
            <h1 className="display-4">Book Search</h1>
            <p className="lead">Search for books and then save the ones you like so you know what to pick up next time you're at a library or bookstore!</p>
        </div>
    </div>

  );
}