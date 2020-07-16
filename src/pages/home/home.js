import React from "react";
import { Box, Grid, Text, Heading, IconButton, Flex } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import DefaultImage from "../../components/defaultImage";

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
          aria-label="Visit retailer page"
          fontSize="20px"
          icon={MdKeyboardArrowRight}
          position="absolute"
          top={2}
          right={2}
        />
      </Box>

      <Box p={5} shadow="md" borderWidth="1px" position="relative">
        <Heading fontSize="xl">Categories</Heading>
        <Text mt={4}>Manage categories. </Text>
        <IconButton
          as={Link}
          to="/categories"
          variant="outline"
          variantColor="teal"
          aria-label="Visit category page"
          fontSize="20px"
          icon={MdKeyboardArrowRight}
          position="absolute"
          top={2}
          right={2}
        />
      </Box>


      <Box p={5} shadow="md" borderWidth="1px" position="relative">
        <Heading fontSize="xl">Raw Data</Heading>
        <Text mt={4}>Temporary for cleaning up raw data</Text>
        <IconButton
          as={Link}
          to="/raw"
          variant="outline"
          variantColor="teal"
          aria-label="VisitRaw page"
          fontSize="20px"
          icon={MdKeyboardArrowRight}
          position="absolute"
          top={2}
          right={2}
        />
      </Box>
      <Flex p={5} shadow="md" borderWidth="1px" position="relative">
        <Box flex={1}>
          <Heading fontSize="xl">Default Image</Heading>
          <Text mt={4}>Default image when product image is missing</Text>
        </Box>

        <DefaultImage />
      </Flex>
    </Grid>
  );
};

export default Home;
