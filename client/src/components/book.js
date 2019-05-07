import React from "react";

export default function Book({bookResults, save, text, saved}) {

    const style = { 
        backgroundColor: 'gray',
        color: 'white',
        width: '100%',
        height: 'auto',
        minHeight: '30vh',
        border: '1px black solid',
        overflow: 'hidden',
    };  

    const imageStyle = {
        position: 'relative',
        left: '0%',
        top: '-20%'
    }

    const textStyle = {
        color: 'white',
        marginLeft: '15vw',
        marginRight: '15vw'
    }

  return (
    <>
        {bookResults.map((book) => (
            <div style={style}>
                <h1 style={textStyle}>{book.title} by {book.author}</h1>
                <img src={book.image} alt={"Not Found"} style={imageStyle}/>
                <p style={textStyle}>{book.description}</p>
                <button onClick={save} id={book.key} name={book.id}>{text}</button>
                <p></p>
                <a href={book.link} style={textStyle}>Click here for more info</a>
            </div>
        ))}
    </>
  );
}