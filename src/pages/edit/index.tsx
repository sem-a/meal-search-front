import React from "react";
import Layout from "../../components/layout";
import { Container } from "../../components/container";
import { FormEdit } from "../../components/form-edit";
import { useGetRecipeForIdQuery } from "../../app/services/recipes";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const { data: recipe, isLoading, isError } = useGetRecipeForIdQuery(id!);

  if (isLoading) {
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
      <Container>
        <FormEdit recipe={recipe} />
      </Container>
    </Layout>
  );
};

export default Edit;
