import React from 'react';
import Card from './Card';

export function CardGroup(props) {
  return (
     <div className="card-group">
      {props.items.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
}
