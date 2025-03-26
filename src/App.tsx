import React, { useState } from "react";
import Layout from "./components/layout";
import { useSearchRecipesMutation } from "./app/services/recipes";
import { Recipes } from "./features/recipes/recipesSlice";

function App() {
  const [recipes, setRecipes] = useState<Recipes[]>();
  const [ingredients, setIngredients] = useState<string>("");

  const [search] = useSearchRecipesMutation();

  const handleSearch = async () => {
    try {
      const query = ingredients.replace(/\s/g, "");

      const data = await search(query);

      setRecipes(data.data?.recipes);
    } catch (err) {
      console.log(err);
    }
  };

  return <div></div>;
}

export default App;
