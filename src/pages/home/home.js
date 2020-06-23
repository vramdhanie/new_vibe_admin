import React from "react";
import { Box, Stack, Text, Heading } from "@chakra-ui/core";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box>
      <Stack spacing={8}>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Products</Heading>
          <Text mt={4}>Manage the list of products</Text>
          <Link to="/products">Go to products page</Link>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Retailers</Heading>
          <Text mt={4}>Manage retailers. </Text>
          <Link to="/retailers">Go to retailers page</Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default Home;
