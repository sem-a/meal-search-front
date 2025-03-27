import React from "react";
import { Container } from "../../components/containers";
import { FormAdd } from "../../components/form-add";
import Layout from "../../components/layout";
import { FormEdit } from "../../components/form-edit";

const Edit = () => {
  return (
    <Layout>
      <Container>
        <FormEdit />
      </Container>
    </Layout>
  );
};

export default Edit;
