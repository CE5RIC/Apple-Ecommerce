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
import category from "../apple-sanity/schemas/category";
import { fetchDevices } from "../utils/fetchDevices";

interface Props {
  categories: Category[];
  devices: Device[];
}

const Home = ({ categories, devices }: Props) => {
  const [value, setValue] = React.useState("one");

  console.log(categories, devices);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const showDevices = (category: number) => {
    return devices
      .filter(
        (device) => device.category._ref === categories[category]._id // Filter devices by category
      )
      .map((device) => <Device />);
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
          {categories.map((category) => (
            <Tab
              key={category._id}
              id={category._id}
              value={category.title}
              label={category.title}
            />
          ))}
        </Tabs>
      </Box>
    </>
  );
};

export default Home;

// Backend Code

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const categories = await fetchCategories();
  const devices = await fetchDevices();
  return {
    props: {
      categories,
      devices,
    },
  };
};
