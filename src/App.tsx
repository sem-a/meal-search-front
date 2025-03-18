import React from "react";
import Layout from "./components/layout";
import { Container } from "./components/container";
import { Button, FormItem, Input, Label, Select } from "./components/form";

const options = ["1234", "5678", "90123"];

function App() {
  return (
    <Layout>
      <Container>
        <FormItem>
          <Label htmlFor="ingredients">Желаемые ингредиенты:</Label>
          <Input id="ingredients" name="ingredients" />
        </FormItem>
        <FormItem>
          <Label htmlFor="cuisine">Кухня:</Label>
          <Select id="cuisine" name="cuisine" options={options} />
        </FormItem>
        <FormItem>
          <Button>найти</Button>
        </FormItem>
      </Container>
    </Layout>
  );
}

export default App;
