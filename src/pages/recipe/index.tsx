import React from "react";
import Layout from "../../components/layout";
import { useParams } from "react-router-dom";
import { useGetRecipeForIdQuery } from "../../app/services/recipes";
import { Container } from "../../components/container";
import styles from "./index.module.css";

const Recipe = () => {
  const { id } = useParams();

  const { data: recipe, isLoading, isError } = useGetRecipeForIdQuery(id!);

  if (isLoading || !recipe) {
    return (
      <Layout>
        <Container>Загрузка...</Container>
      </Layout>
    );
  }

  if (isError) {
    return (
      <Layout>
        <Container>Ошибка!</Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>{recipe.title}</h1>
        </div>
        <div className={styles.flex}>
          <img src={recipe.photo} alt="recipe" />
          <div className={styles.body}>
            <div className={styles.cuisine}>
              <div className={styles.bodyTitle}>
                <h2>Кухня:</h2>
              </div>
              <p>{recipe.cuisine}</p>
            </div>
            <div className={styles.ingredients}>
              <div className={styles.bodyTitle}>
                <h2>Ингредиенты:</h2>
              </div>
              <ul className={styles.ingredientsList}>
                {recipe.ingredients.map((item) => (
                  <li
                    key={item._id}
                    className={styles.ingredientItem}
                  >{`${item.name} - ${item.quantity} ${item.unit}.`}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.recipe}>
          <div className={styles.bodyTitle}>
            <h2>Рецепт:</h2>
          </div>
          <ol className={styles.steps}>
            {recipe.steps.map((item, index) => (
              <li key={index} className={styles.stepItem}>
                {item}
              </li>
            ))}
          </ol>
        </div>
        </div>
    </Layout>
  );
};

export default Recipe;
