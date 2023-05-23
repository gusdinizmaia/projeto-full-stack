import type { NextPage } from "next";
import React from "react";
import { Header } from "../components/Header";
import { ContainerContact } from "../components/ContainerContact";
import { ContainerForm } from "../components/ContainerForm";
import { ContainerDecoration } from "../components/ContainerDecoration";

const IndexPage: NextPage = () => {
  return (
    <React.Fragment>
      <Header />
      <ContainerContact />
      <ContainerForm />
      <ContainerDecoration />
    </React.Fragment>
  );
};

export default IndexPage;
