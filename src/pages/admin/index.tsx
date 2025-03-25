import React from "react";
import Layout from "../../components/layout";
import { Container } from "../../components/container";
import { FormAdd } from "../../components/form-add";

const Admin = () => {
  return (
    <Layout>
      <Container>
        <FormAdd />
      </Container>
    </Layout>
  );
};

export default Admin;
