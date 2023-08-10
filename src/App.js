import React, { useState, useEffect } from 'react';
import FlashcardList from './FlashcardList';
import axios from 'axios';

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)

  // useEffect(() => {
  //   axios
  //   .get('https://opentdb.com/api.php?amount=10')
  //   .then(res => {
  //     setFlashcards(res.data.results.map((questionItem, index) => {
  //       const answer = decodeString(questionItem.correct_answer);
  //       const options = [
  //         ...questionItem.incorrect_answers.map(a => decodeString(a)), answer]
  //       return {
  //         id: `${index}-${Date.now()}`,
  //         question: decodeString(questionItem.question),
  //         answer: questionItem.correct_answer,
  //         options: options.sort(() => Math.random() - .5)
  //       }
  //     }))
  //     console.log(res.data)
  //   })
  // }, [])

  // function decodeString(str) {
  //   const textArea = document.createElement('textarea')
  //   textArea.innerHTML= str;
  //   return textArea.value;
  // }
  return (
   <div>
    <h1>Union Loafers Menu Knowledge</h1>
      <div className="container">
        <FlashcardList flashcards={flashcards}/>
      </div>
      </div> 
  );
}

const SAMPLE_FLASHCARDS = [
  {
      id: 1,
      name: `Light & Mild`,
      description:`This is a very traditional sourdough in the style of rustic French countryside bread`,
      ingredient: `Ingredients
      Transitional Whole Kernel wheat flour from The Mill at Janie’s Farm (for nutrition and flavor),
      Dark rye flour from Janies,
      High protein bread flour from Janie’s (for gluten strength),
      Water,
      Salt`,
      options: [
          // '2', '3', '4', '5',
      ]
  },
  {
      id: 2,
      name: `Janie's Bread`,
      description: `This bread is made with a local Whole Wheat that is stone-milled fresh for us in Ashkum, IL`,
      ingredient: `Transitional Whole Kernel wheat flour from The Mill at Janie's Farm (for nutrition and flavor)
      Dark rye flour from Janies 
      High protein bread flour from Janie's (for gluten strength)
      Water
      Salt
      `,
      options: [
          // 'Answer', 'Answer 1', 'Answer 2', 'Answer 3',
      ]
  },
  {
    id: 3,
    name: `Hoagie`,
    description: `Hoagies are a classic sandwich shop bread. It’s a soft white bread with a tender crumb and mild flavor.`,
    ingredient: `high gluten wheat
    Durum wheat
    Water
    Sugar
    Instant yeast
    Salt
    Soy oil
    
    `,
    options: [
        // 'Answer', 'Answer 1', 'Answer 2', 'Answer 3',
    ]
},
{
  id: 4,
  name: `Semolina`,
  description: `This is our take on a classic Italian table bread. The sesame seeds give the bread a warm nutty flavor, while the oil gives the crumb a silky smooth texture.`,
  ingredient: `Sifted Wheat
  Whole Durum Wheat
  Soy Oil
  Water
  Salt
  Sesame Seeds
  
  `,
  options: [
      // 'Answer', 'Answer 1', 'Answer 2', 'Answer 3',
  ]
},
{
  id: 5,
  name: `Marble Rye`,
  description: `This is a classic New York Style Deli rye bread.`,
  ingredient: `High Gluten Wheat
  Whole Rye Flour from Janie’s Mill
  Water
  Molasses
  Cocoa Noir
  Carraway
  Salt
  
  `,
  options: [
      // 'Answer', 'Answer 1', 'Answer 2', 'Answer 3',
  ]
},
{
  id: 6,
  name: `Baguette`,
  description: `This is the classic French bread. This bread offers a crispy crust with a soft pillowy interior.`,
  ingredient: `Sifted Wheat
  Whole Wheat
  Rye
  Water
  Salt
  Yeast
  `,
  options: [
      // 'Answer', 'Answer 1', 'Answer 2', 'Answer 3',
  ]
},
{
  id: 7,
  name: `Seeded Janie’s Bread`,
  description: `This bread is our Local Whole Wheat with the addition of seeds. It’s rich, earthy, and offers a variety of textures.`,
  ingredient: `Transitional Whole Wheat from The Mill at Janie’s Farm
  Water
  Salt
  Flax
  Millet
  Pumpkin Seed
  Sunflower Seed
  Sesame Seed
  `,
  options: [
      // 'Answer', 'Answer 1', 'Answer 2', 'Answer 3',
  ]
},
{
  id: 8,
  name: `Cheesy Bread`,
  description: `This focaccia dough is baked with a sharp white cheddar cheese and topped with breadcrumbs.`,
  ingredient: `High Gluten Wheat
  Water
  Sugar
  Salt
  Yeast
  White Cheddar
  Breadcrumbs
  Olive oil
  `,
  options: [
      // 'Answer', 'Answer 1', 'Answer 2', 'Answer 3',
  ]
},
{
  id: 9,
  name: `Pizza Rossa`,
  description: `This focaccia dough has a spicy salty tomato topping.`,
  ingredient: `High Gluten Wheat
  Water
  Sugar
  Salt
  Yeast
  Crushed tomatoes
  Maldon sea salt
  Chili oil
  `,
  options: [
      // 'Answer', 'Answer 1', 'Answer 2', 'Answer 3',
  ]
},

]

export default App;
