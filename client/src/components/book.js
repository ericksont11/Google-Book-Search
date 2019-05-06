import React from "react";

export default function Book({bookResults}) {

    const style = { 
        backgroundColor: 'blue',
        color: 'white',
        width: '100%',
        height: '30vh'
    };  

    const imageStyle = {
        position: 'relative',
        float: 'left',
        padding: '2vh',
        height: '26vh'
    }

    const textStyle = {
        color: 'white'
    }

  return (
    <>
        {bookResults.map((book) => (
            <div style={style}>
                <img src={book.image} alt={"Not Found"} style={imageStyle}/>
                <p style={textStyle}>{book.author}</p>
                <a href={book.link}>{book.link}</a>
                <h1>{book.title}</h1>
                <p style={textStyle}>{book.description}</p>
            </div>
        ))}
    </>
  );
}