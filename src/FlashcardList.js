import React from 'react';
import Flashcard from './Flashcard';

export default function FlashcardList({ flashcards }) {
  return (
    <div className="card-grid">
      {flashcards.map(card => (
        <Flashcard
          key={card.id}
          name={card.name}
          image={card.image}
          description={card.description}
          ingredient={card.ingredient}
        />
      ))}
    </div>
  );
}
