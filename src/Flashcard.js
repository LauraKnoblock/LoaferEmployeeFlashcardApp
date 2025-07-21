import React, { useState } from 'react';

export default function Flashcard({ name, image, description, ingredient }) {
  const [flipped, setFlipped] = useState(false);

  return (
   <div className={`card ${flipped ? 'flip' : ''}`} onClick={() => setFlipped(!flipped)}>
  <div className="card-inner">
    <div className="front">
        <div class="card-content">
         <h3>{name}</h3>
         <p>{description}</p>
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      </div>
     
    </div>
    <div className="back">
        <div class="card-content">
<p>
  {typeof ingredient === 'string'
    ? ingredient.split('\n').filter(line => line.trim() !== '').join(', ')
    : Array.isArray(ingredient)
      ? ingredient.join(', ')
      : ''}
</p>      </div>
    </div>
  </div>
</div>

  );
}
