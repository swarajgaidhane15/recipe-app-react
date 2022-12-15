//jshint esversion:10

import React, {useState, useEffect} from 'react';
import Recipe from './Recipe';
import './App.css';

function App() {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('cucumber');

  useEffect(() => {
    getRecipe();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  function handleChange(e) {
    setSearch(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={handleChange}
        />
        <button className="search-button" type="submit" >Search</button>
      </form>
      <div className="recipes">
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );

}

export default App;
