import React from 'react';
import '../App.css';

function Card(props) {
  return (
    <div className="card">
      <img 
      src= {`/${props.item.img}`}
      alt={props.item.text} 
      className="card-img" 
      />
      <p className="card-text">{props.item.text}</p>
    </div>
  );
}

export default Card;
