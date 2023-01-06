import { Box } from "@mui/material";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Landing from "../components/Landing";

// Tabs on the homePage
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React from "react";
import { useState } from "react";
import { fetchCategories } from "../utils/fetchCategories";

const Home: NextPage = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Box>
        <Head>
          <title>Apple E-commerce</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
      </Box>

      <Box>
        <Landing />
      </Box>

      <Box>
        <h1>Promos</h1>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="Item One" />
          <Tab value="two" label="Item Two" />
          <Tab value="three" label="Item Three" />
          <Tab value="four" label="Item Four" />
        </Tabs>
      </Box>
    </>
  );
};

export default Home;

// Backend Code

export const getServerSideProps: GetServerSideProps = async () => {
  const categories = await fetchCategories();
  return {
    props: {
      categories,
    },
  };
};
