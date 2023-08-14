import React, { useState, useEffect, useRef } from 'react'
import './App.css'

export default function Flashcard( { flashcard }) {
   const [flip, setFlip] = useState(false);
   const [height, setHeight] = useState('initial');

   const frontEl = useRef();
   const backEl = useRef();

   function setMaxHeight() {
    const frontHeight = frontEl.current.getBoundingClientRect().height;
      const backHeight = backEl.current.getBoundingClientRect().height;
      setHeight(Math.max(frontHeight, backHeight, 100));
   }

  useEffect(setMaxHeight, [flashcard.name, flashcard.description, flashcard.ingredient, flashcard.image, flashcard.options]);
  useEffect(() => {
      window.addEventListener('resize', setMaxHeight)
      return () => window.removeEventListener('resize', setMaxHeight);
  }, );
  useEffect(() => {
    window.addEventListener('resize', setMaxHeight);
    return () => window.removeEventListener('resize', setMaxHeight);
  }, []);
  return (
    <div 
      className={`card ${flip ? 'flip' : ''}`}
      style={{ height: height}}
      onClick={() => setFlip(!flip)}>
      <div className="front" ref={frontEl}>
       <h3> {flashcard.name}</h3>
        {flashcard.description}
        <img src={flashcard.image}></img>
        <div className ="flashcard-options">
          {/* {flashcard.options.map(option => {
            return <div className="flashcard-option">
              {option}</div>
          })} */}
        </div>
      </div>
      <div className="back" ref={backEl}>
      <h4>Ingredients:</h4>
  <ul>
    {flashcard.ingredient.split('\n').map((ingredient, index) => (
      <li key={index}>{ingredient}</li>
    ))}
  </ul>
      </div>
        {/* {flip ? flashcard.answer : flashcard.question} */}
    </div>
    
  )
}
