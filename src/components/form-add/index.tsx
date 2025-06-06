import React, { useState } from "react";
import {
  CustomButton,
  CustomInput,
  CustomLabel,
  CustomSelect,
  CustomTextarea,
  FormFlex,
  FormItem,
} from "../form-item";
import { IngredientsList } from "../ingredients-list";
import { StepsList } from "../steps-list";
import { useAddRecipeMutation } from "../../app/services/recipes";

export const FormAdd = () => {
  const [addRecipe] = useAddRecipeMutation();

  const [ingredients, setIngredients] = useState<
    | {
        name: string;
        quantity: string;
        unit: string;
      }[]
    | []
  >([]);
  const [steps, setSteps] = useState<string[]>([]);

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [cuisine, setCuisine] = useState<string>("");
  const [photo, setPhoto] = useState<string>("");
  const [ingredient, setIngredient] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [unit, setUnit] = useState<string>("г");
  const [step, setStep] = useState<string>("");

  const handleIngredientButton = () => {
    const data = {
      name: ingredient,
      quantity,
      unit,
    };

    setIngredients([...ingredients, data]);
    setIngredient("");
    setQuantity("");
    setUnit("");
  };

  const handleDeleteIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const handleStepsButton = () => {
    setSteps([...steps, step]);
    setStep("");
  };

  const handleDeleteStep = (index: number) => {
    setSteps(steps.filter((_, i) => i !== index));
  };

  const handleAddRecipe = async () => {
    const data = {
      title: name,
      description,
      cuisine,
      photo,
      ingredients,
      steps,
    };
    try {
      const recipe = await addRecipe(data);
      if (recipe) {
        alert("Рецепт успешно добавлен");
      }
    } catch (err) {
      alert("При добавлении рецепта возникла ошибка!");
    }
  };

  return (
    <>
      <FormItem>
        <CustomLabel htmlFor="name">Название:</CustomLabel>
        <CustomInput
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormItem>
      <FormItem>
        <CustomLabel htmlFor="description">Описание:</CustomLabel>
        <CustomTextarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormItem>
      <FormItem>
        <CustomLabel htmlFor="cuisine">Кухня:</CustomLabel>
        <CustomInput
          id="cuisine"
          name="cuisine"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
        />
      </FormItem>
      <FormItem>
        <CustomLabel htmlFor="photo">Ссылка на фото:</CustomLabel>
        <CustomInput
          id="photo"
          name="photo"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
      </FormItem>
      <FormItem>
        <IngredientsList list={ingredients} onClick={handleDeleteIngredient} />
      </FormItem>
      <FormFlex
        display="grid"
        gridTemplateColumns="3fr 1fr 1fr 1fr"
        gap="14px"
        alignItems="flex-end"
      >
        <FormItem>
          <CustomLabel htmlFor="ingredient">Ингредиент</CustomLabel>
          <CustomInput
            id="ingredient"
            name="ingredient"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
          />
        </FormItem>
        <FormItem>
          <CustomLabel htmlFor="quantity">Кол</CustomLabel>
          <CustomInput
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </FormItem>
        <FormItem>
          <CustomLabel htmlFor="unit">Ед</CustomLabel>
          <CustomSelect
            options={["г", "кг", "мл", "л", "шт", "ч.л", "ст.л"]}
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          />
        </FormItem>
        <FormItem>
          <CustomButton onClick={handleIngredientButton}>добавить</CustomButton>
        </FormItem>
      </FormFlex>
      <FormItem>
        <StepsList list={steps} onClick={handleDeleteStep} />
      </FormItem>
      <FormFlex
        display="grid"
        gridTemplateColumns="4fr 1fr"
        gap="14px"
        alignItems="flex-end"
      >
        <FormItem>
          <CustomLabel htmlFor="step">Шаг:</CustomLabel>
          <CustomInput
            id="step"
            name="step"
            value={step}
            onChange={(e) => setStep(e.target.value)}
          />
        </FormItem>
        <FormItem>
          <CustomButton onClick={handleStepsButton}>добавить</CustomButton>
        </FormItem>
      </FormFlex>
      <FormItem>
        <CustomButton onClick={handleAddRecipe}>создать</CustomButton>
      </FormItem>
    </>
  );
};
