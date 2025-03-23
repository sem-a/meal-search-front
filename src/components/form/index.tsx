import React, { useState } from "react";
import {
  Button,
  FormFlex,
  FormItem,
  IngredientsList,
  Input,
  Label,
  Select,
  StepsList,
  Textarea,
} from "../form-item";
import { useAddRecipeMutation } from "../../app/services/recipes";

export const FormAdd = () => {
  const [addRecipe] = useAddRecipeMutation();

  const [ingredients, setIngredients] = useState<
    { name: string; quantity: string; unit: string }[]
  >([]);
  const [steps, setSteps] = useState<string[]>([]);

  const [newIngredient, setNewIngredient] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [unit, setUnit] = useState<string>("г");

  const [newStep, setNewStep] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [cuisine, setCuisine] = useState<string>("");
  const [photo, setPhoto] = useState<string>("");

  const handleSelect = (e: any) => {
    setUnit(e.target.value);
  };

  const handleAddIngredient = () => {
    if (newIngredient && quantity) {
      const temp = {
        name: newIngredient,
        quantity,
        unit,
      };
      setIngredients([...ingredients, temp]);
      setNewIngredient("");
      setQuantity("");
    }
  };
  const handleDeleteIngredient = (index: number) => {
    const updatedIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(updatedIngredients);
  };
  const handleAddSteps = () => {
    if (newStep) {
      setSteps([...steps, newStep.trim()]);
      setNewStep("");
    }
  };
  const handleDeleteSteps = (index: number) => {
    const updatedSteps = steps.filter((_, i) => i !== index);
    setSteps(updatedSteps);
  };

  const handleSubmitForm = async () => {
    const data = {
      title: name,
      description,
      cuisine,
      ingredients,
      steps,
      photo,
    };

    try {
      await addRecipe(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <FormItem>
        <Label htmlFor="name">Имя рецепта:</Label>
        <Input
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormItem>
      <FormItem>
        <Label htmlFor="description">Описание рецепта:</Label>
        <Textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormItem>
      <FormItem>
        <Label htmlFor="cuisine">Кухня:</Label>
        <Input
          id="cuisine"
          name="cuisine"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
        />
      </FormItem>
      <FormItem>
        <Label htmlFor="photo">Ссылка на фото:</Label>
        <Input
          id="photo"
          name="photo"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
      </FormItem>
      <FormItem>
        <Label htmlFor="ingredients">Ингредиенты:</Label>
        <IngredientsList list={ingredients} onClick={handleDeleteIngredient} />
        <FormFlex
          display="grid"
          gridTemplateColumns="3fr 1fr 1fr 1fr"
          alignItems="flex-end"
          gap="7px"
        >
          <FormItem>
            <Label>Название:</Label>
            <Input
              id="ingredients"
              name="ingredients"
              value={newIngredient}
              onChange={(e) => {
                setNewIngredient(e.target.value);
              }}
            />
          </FormItem>
          <FormItem>
            <Label>Кол-во</Label>
            <Input
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <Label>Ед.</Label>
            <Select
              id="unit"
              name="unit"
              options={["г", "кг", "мл", "л", "шт"]}
              value={unit}
              onChange={handleSelect}
            />
          </FormItem>
          <Button onClick={handleAddIngredient}>добавить</Button>
        </FormFlex>
      </FormItem>
      <FormItem>
        <Label htmlFor="steps">Шаги:</Label>
        <StepsList list={steps} onClick={handleDeleteSteps} />
        <FormFlex
          display="grid"
          gridTemplateColumns="4fr 1fr"
          alignItems="flex-end"
          gap="7px"
        >
          <Input
            id="steps"
            name="steps"
            value={newStep}
            onChange={(e) => {
              setNewStep(e.target.value);
            }}
          />
          <Button onClick={handleAddSteps}>добавить</Button>
        </FormFlex>
      </FormItem>
      <FormItem>
        <Button onClick={handleSubmitForm}>добавить рецепт</Button>
      </FormItem>
    </form>
  );
};
