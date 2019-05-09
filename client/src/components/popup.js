import React from "react";
import './popup.css'

export default function Popup() {

    const style = {
        margin: 'auto',
        width: '40vw',
        height: '15vw',
        zIndex: '2',
        color: 'gray',
        backgroundColor: 'white',
        borderRadius: '5%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }

  return (
    <div class="hidden fixed" id="saveModal" style={style}>
        <span >Saved!</span>
    </div>
  );
}