import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "./recipe/Header";
import Recipes from "./recipe/Recipes";
import Axios from "axios";

const Main = () => {
  const [search, setSerach] = useState("chiken");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "fab1a7fb";
  const APP_KEY = "7e05969d0e2e6d46b207c6f953160bc0";



  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(res.data.hits);
  };

  const onInputChange = e => {
    setSerach(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };
  useEffect(() => {
    getRecipes();
  }, []);
  return (
    <div className="App">
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default Main;