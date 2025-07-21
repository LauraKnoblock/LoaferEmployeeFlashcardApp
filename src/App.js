import React, { useState, useEffect } from 'react';
import FlashcardList from './FlashcardList';
import axios from 'axios';
import Flashcard from './Flashcard';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('none');
  const [searchTerm, setSearchTerm] = useState('');  // <-- new state for search input
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);

  const categoryFlashcards = {
    bread: SAMPLE_FLASHCARDS.filter(card => card.category === 'bread'),
    sandwiches: SAMPLE_FLASHCARDS.filter(card => card.category === 'sandwiches'),
    lunchSoupSalad: SAMPLE_FLASHCARDS.filter(card => card.category === 'lunchSoupSalad'),
    snacksSides: SAMPLE_FLASHCARDS.filter(card => card.category === 'snacksSides'),
    sauces: SAMPLE_FLASHCARDS.filter(card => card.category === 'sauces'),
    pizza: SAMPLE_FLASHCARDS.filter(card => card.category === 'pizza'),
    dinnerStarters: SAMPLE_FLASHCARDS.filter(card => card.category === 'dinnerStarters'),
  };

  // Handle category change
  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
    setSearchTerm(''); // reset search when category changes
    setFlashcards(categoryFlashcards[newCategory]);
    console.log("Category selected:", newCategory);
    console.log("Flashcards set to:", categoryFlashcards[newCategory]);
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    // Filter flashcards by both category and ingredient
    const baseCards = selectedCategory === 'none' ? SAMPLE_FLASHCARDS : categoryFlashcards[selectedCategory];

    const filteredCards = baseCards.filter(card =>
      card.ingredient.toLowerCase().includes(term.toLowerCase())
    );

    setFlashcards(filteredCards);
  };

  return (
    <div>
      <div className="header">
        <div class="header-content">
      <img src="https://images.squarespace-cdn.com/content/v1/59626a54e58c62cb702f966f/1550516597840-RQUDC10WZ33QFTLH6UAZ/Seal_blue.png?format=100w"/>
      <h1>Union Loafers Menu Guide</h1>
      </div>
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

      <div>
  <input
    type="text"
    placeholder="Search by ingredient..."
    value={searchTerm}
    onChange={handleSearchChange}
    style={{ marginTop: '10px', padding: '5px', width: '300px' }}
  />
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
  name: `Caesar Salad`,
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
  id: 28,
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
  id: 29,
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
  id: 30,
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

{  id: 32,
  name: `Garlic Mayo`,
  category: 'sauces',
  image: 'https://d1w7312wesee68.cloudfront.net/HqQKi07bZYBx15K7lkfHoAkTpZNEs6hZsX5NVxlgCCw/resize:fit:720:720/plain/s3://toasttab/menu_service/restaurants/e0fb2687-939e-49d9-95e8-841142c1ef3c/MenuItem/5f8585bb-b338-476f-9e11-864325f63ee5.jpg',
  description: 'Garlic Mayo is an adaptation on Basic Mayo that provides a rich garlic flavor.',
  ingredient: `Egg Yolk
White Distilled Vinegar
Salt
Garlic
Soy Oil
`},

{  id: 33,
  name: `Buttermilk Dressing`,
  category: 'sauces',
  image: 'https://d1w7312wesee68.cloudfront.net/cqaBgEDkvJ4bPfeiUPhWV3qbGYxFoDOix10rSaCd8HY/resize:fit:720:720/plain/s3://toasttab/menu_service/restaurants/e0fb2687-939e-49d9-95e8-841142c1ef3c/MenuItem/0e23e9d6-b52d-48bb-a220-59149563e8ea.jpg',
  description: 'The Buttermilk Dressing is a lighter version of a Ranch Dressing.',
  ingredient: `Egg Yolk
Buttermilk
Shallot
Sour Cream
Garlic
Lemon Juice
Salt
Soy Oil
`,
},

{  id: 34,
  name: `Grainy Mustard`,
  category: 'sauces',
  image: 'https://d1w7312wesee68.cloudfront.net/o3MZxCEZmMCAHCiRK_-0Jlt1_ByGUYAUXSmLJXrEhLU/resize:fit:720:720/plain/s3://toasttab/menu_service/restaurants/e0fb2687-939e-49d9-95e8-841142c1ef3c/MenuItem/3e9b102a-7ab5-45cd-a022-65629f591321.jpg',
  description: 'Grainy Mustard is a traditional semi-ground mustard providing texture and sharpness.',
  ingredient: `Brown Mustard Seed
Yellow Mustard Seed
Champagne Vinegar
White Distilled Vinegar
Beer
Salt
`,
},

{  id: 35,
  name: `100k Island Dressing`,
  category: 'sauces',
  image: '',
  description: '100k Island is a slightly brighter version of 1,000 Island, with Hard Boiled Eggs diced in and a little kick with sriracha added.',
  ingredient: `Egg Yolk
Shallot
Garlic
Bread & Butter Pickles
Ketchup
Sriracha
Salt
Black Pepper
Soy Oil
Hard Boiled Eggs
`,
},

{  id: 36,
  name: `Bistro Sauce`,
  category: 'sauces',
  image: 'https://d1w7312wesee68.cloudfront.net/6QzakESVvK6GQqXQf0KK8QeFcsV92CnTmQcMvUgKFmI/resize:fit:720:720/plain/s3://toasttab/menu_service/restaurants/e0fb2687-939e-49d9-95e8-841142c1ef3c/MenuItem/5c4692c5-36f2-415e-a50e-c0b77965f4ad.jpg',
  description: 'Bistro is a mustard and horseradish sauce. Unlike many Horseradish sauces, Bistro sauce is an emulsification instead of a mixture. This allows for a consistently thick sauce.',
  ingredient: `Garlic
Horseradish
Grainy Mustard
Egg Yolk
White Distilled Vinegar
Salt
Soy Oil
`,
},

{  id: 37,
  name: `Famous Sauce`,
  category: 'sauces',
  image: 'https://d1w7312wesee68.cloudfront.net/_44u0Onx9kEKfNzMY5mlPsQfbLQI_-MpLiGLp799Zlk/resize:fit:720:720/plain/s3://toasttab/menu_service/restaurants/e0fb2687-939e-49d9-95e8-841142c1ef3c/MenuItem/c1d71314-4b5b-46e0-bfc3-d8d899b1fd74.jpg',
  description: 'Famous is a rich egg and vinegar sauce. In flavor it’s similar to Deviled Egg filling. It provides acid, salt, and fat.',
  ingredient: `Cooked Egg Yolk
Basic Mayo
White Distilled Vinegar
Water
Yellow Mustard
Yellow Mustard Powder
Sugar
Salt
Paprika
`,
},

{  id: 38,
  name: `Roasted Tomato Mayo`,
  category: 'sauces',
  image: 'https://d1w7312wesee68.cloudfront.net/RTwhy8tPPhkrr75tB4iyccvPKL_i4sYQzLBQV_TTHio/resize:fit:720:720/plain/s3://toasttab/menu_service/restaurants/e0fb2687-939e-49d9-95e8-841142c1ef3c/MenuItem/332a0411-5625-4653-9d27-d90bd65df8ee.jpg',
  description: 'With tomatoes being seasonal, the sauce is meant to emulate the wet tomato texture and flavor on the sandwich while still being a rich and sharp mayo. Provides acid, salt, fat and some heat with the addition of the calabrian chilies in the sauce.',
  ingredient: `Roasted Valoroso whole plum tomatoes (broken open, squeezed of most of their juice, and roasted at a high temperature to caramelize and bring out a richer flavor)
Egg yolk
Garlic, fresh
Calabrian chilies
Lemon juice
Valoroso tomato juice (reserved liquid from the can of whole plum tomatoes, separated from the whole tomatoes)
Salt
Soy oil
`,
},

{  id: 39,
  name: `Strawberry Jelly`,
  category: 'sauces',
  image: 'https://d1w7312wesee68.cloudfront.net/RTwhy8tPPhkrr75tB4iyccvPKL_i4sYQzLBQV_TTHio/resize:fit:720:720/plain/s3://toasttab/menu_service/restaurants/e0fb2687-939e-49d9-95e8-841142c1ef3c/MenuItem/332a0411-5625-4653-9d27-d90bd65df8ee.jpg',
  description: '',
  ingredient: `Strawberry
Sugar
Lemon
Pectin
Water
`,
},
{  id: 40,
  name: `Nut Butter`,
  category: 'sauces',
  image: '',
  description: 'Our Nut Butter is only seasoned with salt. We do this to preserve the rich warm peanut flavor.',
  ingredient: `Roasted Peanuts
salt
`,
},
{  id: 41,
  name: `Italian Dressing`,
  category: 'sauces',
  image: '',
  description: 'This dressing seeks to emulate classic old-school “On The Hill” style dressings.',
  ingredient: `Black Pepper
Red Pepper Flake
Dried Basil
Dried Oregano
Salt
Sugar
Grainy Mustard
Red Bell Pepper
Garlic
Shallot
White Distilled Vinegar
Champagne Vinegar
Soy Oil
`,
},
]

export default App;
