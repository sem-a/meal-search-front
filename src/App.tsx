import React, { useEffect, useState } from "react";
import Layout from "./components/layout";
import { useSearchRecipesMutation } from "./app/services/recipes";
import { Recipes } from "./features/recipes/recipesSlice";
import {
  CustomButton,
  CustomInput,
  CustomLabel,
  FormItem,
} from "./components/form-item";
import { Container } from "./components/containers";
import { Card } from "./components/card";

function App() {
  const [recipes, setRecipes] = useState<Recipes[]>([]);
  const [ingredients, setIngredients] = useState<string>("");
  const [search] = useSearchRecipesMutation();

  const handleDelete = (id: string | undefined) => {
    setRecipes(recipes.filter((recipe) => recipe._id !== id));
  };

  const handleSearch = async () => {
    try {
      const query = ingredients.replace(/\s+/g, "_").toLowerCase().trim();
      const data = await search(query).unwrap();
      setRecipes(data);
      console.log(recipes);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout>
      <Container>
        <FormItem>
          <CustomLabel>Ингредиенты:</CustomLabel>
          <CustomInput
            id="ingredients"
            name="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </FormItem>
        <FormItem>
          <CustomButton onClick={handleSearch}>поиск</CustomButton>
        </FormItem>

        <div className="content">
          {recipes.map((recipe) => (
            <Card
              key={recipe._id}
              id={recipe._id}
              title={recipe.title}
              description={recipe.description}
              ingredients={recipe.ingredients}
              photo={recipe.photo}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </Container>
    </Layout>
  );
}

export default App;
