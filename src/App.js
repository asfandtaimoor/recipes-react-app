import React, { useEffect, useState } from "react";
import "./App.css";

// components
import Recipe from "./components/Recipe.component";

const App = () => {
  const APP_ID = "920ddb5b";
  const APP_KEY = "d8990b5525b40092edb4c924cb850f76";

  const [Recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipe();
    setSearch("");
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();

    setRecipes(data.hits);
    console.log(data.hits);
  };

  // Update Search
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <div className="main">
      <div className="container mt-3">
        <h1 className="text-center text-white">Recipes App</h1>

        <div class="d-flex justify-content-center">
          <form onSubmit={getSearch}>
            <div className="mb-3">
              <input
                style={{ width: "500px" }}
                type="text"
                className="form-control"
                placeholder="Search Recipe"
                value={search}
                onChange={updateSearch}
              />
            </div>
            <div class="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="d-flex justify-content-around flex-wrap">
          {Recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              imgSrc={recipe.recipe.image}
              calories={recipe.recipe.calories}
              ingredients={recipe.recipe.ingredientLines}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
