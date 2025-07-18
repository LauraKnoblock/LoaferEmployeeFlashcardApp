import React, { useState } from 'react';

export default function Flashcard({ name, image, description, ingredient }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`card ${flipped ? 'flip' : ''}`} onClick={() => setFlipped(!flipped)}>
      <div className="front">
        <h3>{name}</h3>
        <img src={image} alt={name} />
      </div>
      <div className="back">
        <p>{description}</p>
        <p>{ingredient}</p>
      </div>
    </div>
  );
}
