import { Box } from "@mui/material";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Landing from "../components/Landing";

// Tabs on the homePage
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import TabContext from "@mui/lab/TabContext";

import React from "react";
import { useState } from "react";
import { fetchCategories } from "../utils/fetchCategories";
import category from "../apple-sanity/schemas/category";
import { fetchDevices } from "../utils/fetchDevices";
import Device from "../components/Device";
import device from "../apple-sanity/schemas/device";
import { TabList, TabPanel } from "@mui/lab";

interface Props {
  categories: Category[];
  devices: Device[];
}

const Home = ({ categories, devices }: Props) => {
  const [value, setValue] = useState("1");

  console.log(categories, devices);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const showDevices = (category: number) => {
    return devices
      .filter((device) => device.category._ref === categories[category]._id)
      .map((device) => <Device device={device} key={device._id} />); // filter products by category
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
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList aria-label="Tabs example" onChange={handleChange}>
              <Tab label="Tab One" value="1"></Tab>
              <Tab label="Tab Two" value="2"></Tab>
              <Tab label="Tab Three" value="3"></Tab>
              <Tab label="Tab Four" value="4"></Tab>
            </TabList>
          </Box>
          <TabPanel value="1">{showDevices(0)}</TabPanel>
          <TabPanel value="2">{showDevices(1)}</TabPanel>
          <TabPanel value="3">{showDevices(2)}</TabPanel>
          <TabPanel value="4">{showDevices(3)}</TabPanel>
        </TabContext>
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
