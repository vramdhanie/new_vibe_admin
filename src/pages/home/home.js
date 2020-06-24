import React from "react";
import { Box, Grid, Text, Heading, IconButton } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <Grid
      templateColumns={{
        xs: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
      }}
      gap={6}
      p={8}
    >
      <Box p={5} shadow="md" borderWidth="1px" position="relative">
        <Heading fontSize="xl">Products</Heading>
        <Text mt={4}>Manage the list of products</Text>
        <IconButton
          as={Link}
          to="/products"
          variant="outline"
          variantColor="teal"
          aria-label="Visit product page"
          fontSize="20px"
          icon={MdKeyboardArrowRight}
          position="absolute"
          top={2}
          right={2}
        />
      </Box>
      <Box p={5} shadow="md" borderWidth="1px" position="relative">
        <Heading fontSize="xl">Retailers</Heading>
        <Text mt={4}>Manage retailers. </Text>
        <IconButton
          as={Link}
          to="/retailers"
          variant="outline"
          variantColor="teal"
          aria-label="Visit product page"
          fontSize="20px"
          icon={MdKeyboardArrowRight}
          position="absolute"
          top={2}
          right={2}
        />
      </Box>
    </Grid>
  );
};

export default Home;
