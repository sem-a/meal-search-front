import React, { useState } from "react";
import Layout from "./components/layout";
import { Container } from "./components/container";
import { Button, FormItem, Input, Label, Select } from "./components/form-item";
import Card from "./components/card";
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

  return (
    <Layout>
      <Container>
        <FormItem>
          <Label htmlFor="ingredients">Желаемые ингредиенты:</Label>
          <Input
            id="ingredients"
            name="ingredients"
            value={ingredients}
            onChange={(e) => {
              setIngredients(e.target.value);
            }}
          />
        </FormItem>
        <FormItem>
          <Button onClick={handleSearch}>найти</Button>
        </FormItem>

        {recipes
          ? recipes.map((item) => (
              <Card
                key={item._id}
                id={item._id}
                title={item.title}
                description={item.description}
                ingredients={item.ingredients}
                photo={item.photo}
              />
            ))
          : "Начните поиск рецептов!"}
      </Container>
    </Layout>
  );
}

export default App;
