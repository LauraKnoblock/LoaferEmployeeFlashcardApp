import React, { useState, useEffect } from 'react';
import FlashcardList from './FlashcardList';
import axios from 'axios';
import Flashcard from './Flashcard';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('none');
  const [flashcards, setFlashcards] = useState([]);

  const categoryFlashcards = {
    bread: SAMPLE_FLASHCARDS.filter(card => card.category === 'bread'),
    sandwiches: SAMPLE_FLASHCARDS.filter(card => card.category === 'sandwiches'),
    lunchSoupSalad: SAMPLE_FLASHCARDS.filter(card => card.category === 'lunchSoupSalad'),
    snacksSides: SAMPLE_FLASHCARDS.filter(card => card.category === 'snacksSides'),
    sauces: SAMPLE_FLASHCARDS.filter(card => card.category === 'sauces'),
    pizza: SAMPLE_FLASHCARDS.filter(card => card.category === 'pizza'),
  };

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
    setFlashcards(categoryFlashcards[newCategory]);
  };

  return (
    <div>
      <div className="header">
      <img src="https://images.squarespace-cdn.com/content/v1/59626a54e58c62cb702f966f/1550516597840-RQUDC10WZ33QFTLH6UAZ/Seal_blue.png?format=100w"/>
      <h1>Union Loafers Menu Guide</h1>
      </div>
      <div>
        <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="none" disabled>Select a category</option>
          <option value="bread">Bread</option>
          <option value="sandwiches">Sandwiches</option>
          <option value="lunchSoupSalad">Lunch: Soup & Salad</option>
          <option value='snacksSides'>Snacks & Sides</option>
          <option value='sauces'>Sauces</option>
          <option value="pizza">Pizza</option>
          <option value = "dinnerStarters">Dinner Starters</option>
        </select>
      </div>
      <div className="container">
        <FlashcardList flashcards={flashcards} />
      </div>
    </div>
  );
}

const SAMPLE_FLASHCARDS = [
  {
      id: 1,
      name: `Light & Mild`,
      category: 'bread',
      image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p4_i3_w1280.jpeg?dpr=1.25',
      description:`Our flagship sourdough or "pain au levain," this loaf has an open, custardy crumb and a brittle and crackery crust. Light and mild features a mild sourness and creamy, sweet wheat flavors.`,
      ingredient: `Ingredients
      Transitional Whole Kernel wheat flour from The Mill at Janie’s Farm (for nutrition and flavor),
      Dark rye flour from Janies,
      High protein bread flour from Janie’s (for gluten strength),
      Water,
      Salt`
  },
  {
      id: 2,
      name: `Janie's Bread`,
      category: 'bread',
      image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p112_i3_w2048.jpeg?width=1280&dpr=1.25',
      description: `This bread is made with a local Whole Wheat that is stone-milled fresh for us in Ashkum, IL`,
      ingredient: `Transitional Whole Kernel wheat flour from The Mill at Janie's Farm (for nutrition and flavor)
      Dark rye flour from Janies 
      High protein bread flour from Janie's (for gluten strength)
      Water
      Salt`
  },
  {
    id: 3,
    name: `Hoagie`,
    category: 'bread',
    image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p355_i1_w2048.jpeg?width=1280&dpr=1.25',
    description: `Hoagies are a classic sandwich shop bread. It’s a soft white bread with a tender crumb and mild flavor.`,
    ingredient: `high gluten wheat
    Durum wheat
    Water
    Sugar
    Instant yeast
    Salt
    Soy oil`
},
{
  id: 4,
  name: `Semolina`,
  category: 'bread',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p50_i4_w2048.jpeg?width=1280&dpr=1.25',
  description: `This is our take on a classic Italian table bread. The sesame seeds give the bread a warm nutty flavor, while the oil gives the crumb a silky smooth texture.`,
  ingredient: `Sifted Wheat
  Whole Durum Wheat
  Soy Oil
  Water
  Salt
  Sesame Seeds`
},
{
  id: 5,
  name: `Marble Rye`,
  category: 'bread',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p46_i5_w3600.jpeg?width=1280&dpr=1.25',
  description: `This is a classic New York Style Deli rye bread.`,
  ingredient: `High Gluten Wheat
  Whole Rye Flour from Janie’s Mill
  Water
  Molasses
  Cocoa Noir
  Carraway
  Salt`
},
{
  id: 6,
  name: `Demi-Baguette`,
  category: 'bread',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p758_i2_w4032.jpeg?width=1280&dpr=1.25',
  description: `This is the classic French bread. This bread offers a crispy crust with a soft pillowy interior.`,
  ingredient: `Sifted Wheat
  Whole Wheat
  Rye
  Water
  Salt
  Yeast`
},
{
  id: 7,
  name: `Seeded Janie’s Bread`,
  category: 'bread',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p166_i1_w500.jpeg?dpr=1.25',
  description: `This bread is our Local Whole Wheat with the addition of seeds. It’s rich, earthy, and offers a variety of textures.`,
  ingredient: `Transitional Whole Wheat from The Mill at Janie’s Farm
  Water
  Salt
  Flax
  Millet
  Pumpkin Seed
  Sunflower Seed
  Sesame Seed`
},
{
  id: 8,
  name: `Cheesy Bread`,
  category: 'bread',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p296_i4_w2048.jpeg?width=1280&dpr=1.25',
  description: `This focaccia dough is baked with a sharp white cheddar cheese and topped with breadcrumbs.`,
  ingredient: `High Gluten Wheat
  Water
  Sugar
  Salt
  Yeast
  White Cheddar
  Breadcrumbs
  Olive oil `
},
{
  id: 9,
  name: `Pizza Rossa`,
  category: 'bread',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p305_i5_w2048.jpeg?width=1280&dpr=1.250',
  description: `This focaccia dough has a spicy salty tomato topping.`,
  ingredient: `High Gluten Wheat
  Water
  Sugar
  Salt
  Yeast
  Crushed tomatoes
  Maldon sea salt
  Chili oil`
},
{
  id: 10,
  name: `Bistro Beef`,
  category: 'sandwiches',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p151_i2_w3600.jpeg?width=1280&dpr=1.25',
  description: ``,
  ingredient: `Hoagie
  Bistro sauce
  Gruyere cheese
  Pickled Peppers
  Roast Beef
  Maldon sea salt`
},
{
  id: 11,
  name: `Turkey & Swiss`,
  category: 'sandwiches',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p330_i4_w3600.jpeg?width=1280&dpr=1.25',
  description: ``,
  ingredient: `Light & Mild
  Famous Sauce
  Emmenthaler Cheese
  Whole Leaf Little Gem
  Roasted Turkey Breast
  Salt
  Pepper`
},
{
  id: 12,
  name: `Ham & Cheddar`,
  category: 'sandwiches',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p326_i4_w3600.jpeg?width=1280&dpr=1.25',
  description: ``,
  ingredient: `Marble Rye
  Grainy Mustard
  White Cheddar Cheese
  Dill Pickles
  City Ham
  Butter`
},
{
  id: 13,
  name: `Smoked Trout Salad`,
  category: 'sandwiches',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p420_i1_w3600.jpeg?width=1280&dpr=1.25',
  description: ``,
  ingredient: `Bianca
  Basic Mayo
 Little Gem Leaves
 (tossed in Lemon Juice, Olive oil, salt, and pepper)
 Smoked Trout Salad
 -- Smoked Trout
 -- Basic Mayo
 -- Capers
 -- Fennel
 -- Shallot
 -- Bread & Butter Pickle
 -- Grainy Mustard
 -- Lemon Juice`
},
{
  id: 14,
  name: `Roasted Pork`,
  category: 'sandwiches',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p177_i4_w3600.jpeg?width=1280&dpr=1.25',
  description: `Our take on a Cuban Sandwich`,
  ingredient: `Hoagie
  Yellow Mustard
  Garlic Mayo
  Gruyere Cheese
  Dill Pickles
  Roasted Pork
  Prosciutto`
},
{
  id: 15,
  name: `Smoked Beet`,
  category: 'sandwiches',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p141_i2_w3600.jpeg?width=1280&dpr=1.25',
  description: `A vegetarian take on a classic Reuben`,
  ingredient: `Hoagie
  100k Island Dressing*
  Smoked Beets
  Emmenthaler Cheese
  Sauerkraut`
},
{
  id: 16,
  name: `Nut Butter`,
  category: 'sandwiches',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p221_i3_w1832.jpeg?width=1280&dpr=1.25',
  description: ``,
  ingredient: `Light & Mild
  Nut Butter
  Jelly
  Salted Whipped Butter`
},
{
  id: 17,
  name: `Chicken Salad`,
  category: 'sandwiches',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p328_i3_w2048.jpeg?width=1280&dpr=1.25',
  description: ``,
  ingredient: `Bianca
  Basic Mayo
  Little Gem Leaves
  (tossed with Lemon Juice, Olive Oil, Salt, and Pepper)
  Chicken Salad
  --Roasted Chicken
  --Basic Mayo
  --Shallot
  --Bread & Butter Pickles
  --Grainy Mustard
  --Lemon Juice
  --Tarragon
  --Parsley`
},
{
  id: 18,
  name: `Egg Salad`,
  category: 'sandwiches',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p508_i6_w3024.jpeg?width=1280&dpr=1.25',
  description: ``,
  ingredient:`Oat Porridge
  Famous Sauce
  Little Gem Leaves
  Salt & Pepper
  Egg Salad
  --Hard Boiled Eggs
  --Salt
  --Celery
  --Basic Mayo
  --Dill
  --Chives`
},
{
  id: 18,
  name: `Egg Salad`,
  category: 'sandwiches',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p508_i6_w3024.jpeg?width=1280&dpr=1.25',
  description: ``,
  ingredient:`Oat Porridge
  Famous Sauce
  Little Gem Leaves
  Salt & Pepper
  Egg Salad
  --Hard Boiled Eggs
  --Salt
  --Celery
  --Basic Mayo
  --Dill
  --Chives`
},
]

export default App;
