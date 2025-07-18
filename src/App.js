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
    dinnerStarters: SAMPLE_FLASHCARDS.filter(card => card.category === 'dinnerStarters'),
  };

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
    setFlashcards(categoryFlashcards[newCategory]);
  };
  console.log("Category selected:", newCategory);
    console.log("Flashcards set to:", categoryFlashcards[newCategory]);

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
          <option value="lunchSoupSalad">Soup & Salad</option>
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
  description: `This is the classic French bread. This bread offers a crispy crust with a soft pillowy interior. *AVAILABLE AFTER 3PM*`,
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
  category: 'snacksSides',
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
  category: 'snacksSides',
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
  id: 19,
  name: `Bacon Turkey Bianca`,
  category: 'sandwiches',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p364_i4_w1671.jpeg?width=1280&dpr=1.25',
  description: ``,
  ingredient:`Bianca
  Roasted Tomato Mayo
  Little Gem Leaves
  Turkey Breast
  Salt & Pepper
  Neuskes Bacon`
},
{
  id: 20,
  name: `Toscano`,
  category: 'sandwiches',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p316_i3_w2048.jpeg?width=1280&dpr=1.25',
  description: ``,
  ingredient:`Bianca
  Basic Mayo
  Pickled Banana Peppers
  Salami
  Pecorino Toscano`
},
{
  id: 21,
  name: `Curry Corn and Potato Soup`,
  category: 'lunchSoupSalad',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p603_i3_w3024.jpeg?width=1280&dpr=1.25',
  description: `Vegan`,
  ingredient:`--Base
  Corn & Corn Stock
  Water
  Russet Potatoes
  Yellow Onion
  Garlic
  Salt
  Ginger
  Coconut Milk
  Curry Powder
  Turmeric
  Cumin
  Coriander
  Paprika
  Soy oil
  --Charred Corn and Poblano Relish
  Poblano Peppers
  Lime Juice and Zest
  Ginger
  Corn`
},
{
  id: 22,
  name: `Basic Mayo`,
  category: 'sauces',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p536_i1_w3600.jpeg?width=1280&dpr=1.25',
  description: ``,
  ingredient:`Egg Yolk
  White Distilled Vinegar
  Salt
  Soy Oil`
},
{
  id: 23,
  name: `Bistro Sauce`,
  category: 'sauces',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p537_i1_w3600.jpeg?width=1280&dpr=1.25',
  description: `Bistro sauce is a mustard and horseradish sauce. Unlike many Horseradish sauces, Bistro sauce is an emulsification instead of a mixture. This allows for a consistently thick sauce.`,
  ingredient:`Garlic
  Horseradish
  Grainy Mustard
  Egg Yolk
  White Distilled Vinegar
  Salt
  Soy Oil`
},
{
  id: 24,
  name: `Marinara`,
  category: 'pizza',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p110_i1_w2048.jpeg?width=1280&dpr=1.25',
  description: `The Marinara is our only vegan option for pizza. It is a spicy, garlicky, herbal pizza emphasizing the brightness of the tomato sauce and the foral heat of the chili oil.`,
  ingredient:`Pizza Sauce
  Oregano
  Basil
  Maldon Sea Salt
  Chopped Calabrian Chili's
  Garlic Slices
  Garlic oil`
},
{
  id: 25,
  name: `Pepperoni`,
  category: 'pizza',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p148_i1_w2048.jpeg?width=1280&dpr=1.25',
  description: `We take a classic Pepperoni and brighten it up with the fruity heat of Calabrian Chilis.`,
  ingredient:`Pizza Sauce
  Shredded Mozarella
  Oregano
  Basil
  Ezzo Pepperoni
  Calabrian Chilis
  Grana Padano
  Fresh Mozarella`
},
{
  id: 26,
  name: `Caeser Salad`,
  category: 'dinnerStarters',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p174_i1_w3024.jpeg?width=1280&dpr=1.25',
  description: `We take a classic Pepperoni and brighten it up with the fruity heat of Calabrian Chilis.`,
  ingredient:`Romaine
  Little Gem Lettuce
  Salt Pepper
  Anchovy
  Capers
  Chili Flake
  Bread Crumbs
  Grana Padano
  Caesar Dressing`
},

{
  id: 27,
  name: `Pretzel`,
  category: 'snacksSides',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p206_i4_w2048.jpeg?width=1280&dpr=1.25',
  description: `Naturally leavened pretzel with your choice of house mustard or whipped & salted butter.`,
  ingredient:`Sifted Wheat
  Malted Barley
  Butter
  Salt
  Water
  Dipped in Lye`
},
{
  id: 27,
  name: `Chocolate Chip Cookie`,
  category: 'snacksSides',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p386_i2_w2184.jpeg?width=1280&dpr=1.25',
  description: `These are classic, Grandma Style cookies. Firm on the outside and softer towards the center.`,
  ingredient:`Sifted Wheat
  Egg
  Butter
  Brown Sugar
  White Sugar
  Salt
  Baking Soda
  Baking Powder
  Chocolate Chips`
},
{
  id: 28,
  name: `The Bear`,
  category: 'sandwiches',
  image: 'https://d1w7312wesee68.cloudfront.net/Ic9oaHJg62pUbA-31qAQpcWTR7dYqZHmUU0XjBP5SAg/resize:fit:720:720/plain/s3://toasttab/menu_service/restaurants/e0fb2687-939e-49d9-95e8-841142c1ef3c/MenuItem/40122e1b-a444-414b-9f6e-111ffab1e316.jpg',
  description: `Giardiniera, parmesan mayo, banana peppers, vinaigrette.`,
  ingredient:`Roast Beef
  Giardiniera
  parmesan mayo
  banana peppers
  vinaigrette`
},
{
  id: 29,
  name: `Little Gem Salad`,
  category: 'lunchSoupSalad',
  image: 'https://d1w7312wesee68.cloudfront.net/GsxMY3_01rutp669tRD0amyGi6etR0N2CIAKwMkUkSg/resize:fit:720:720/plain/s3://toasttab/menu_service/restaurants/e0fb2687-939e-49d9-95e8-841142c1ef3c/MenuItem/b9ac8e6b-82e7-4c6e-9ae4-f8634261eba3.jpg',
  ingredient:`Little Gem Lettuce
  Romaine
  Salt
  Pepper
  Buttermilk Dressing
  Pickled Shallots
  Herbs-
  Chervil
  Parsley
  Chives
  Dill`
},
{
 id: 30,
  name: `Pretzel`,
  category: 'snacksSides',
  image: 'https://d1w7312wesee68.cloudfront.net/uk0Sc3EMJLd2-b__Kk0jLQzHckhzgkkELJEDd2_We9I/resize:fit:720:720/plain/s3://toasttab/menu_service/restaurants/e0fb2687-939e-49d9-95e8-841142c1ef3c/MenuItem/2c20273b-1285-49e7-a991-c842fa35987a.jpg',
  ingredient: `Sifted Wheat
  Malted Barley
  Butter
  Salt
  Water
  Dipped in Lye`,
},
{  id: 31,
  name: `Giardiniera`,
  category: 'snacksSides',
  image: 'https://d1w7312wesee68.cloudfront.net/PRnMAUo7iaTJO-5z8hDZZfyx7ycMHxrT4joHE7SUEjg/resize:fit:720:720/plain/s3://toasttab/menu_service/restaurants/e0fb2687-939e-49d9-95e8-841142c1ef3c/MenuItem/f7336dd4-5d57-4486-95ff-7d3c662f2dcb.jpg',
  ingredient: `Serrano Peppers
  Celery
  Carrot
  Cauliflower
  Water
  White Distilled Vinegar
  Salt
  Soy Oil
  Olive Oil`,
},
]

export default App;
