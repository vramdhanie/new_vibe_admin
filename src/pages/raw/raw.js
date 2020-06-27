import React from "react";
import products from "../../raw/data.json";
import { Box, Heading, Flex } from "@chakra-ui/core";
import categories from "../../raw/categories";

const Raw = () => {
  return (
    <Box>
      <Box>
        <Heading>Categories</Heading>
        <Flex>
          <Box flex={1}>Original</Box>
          <Box flex={1}>Main Category</Box>
          <Box flex={1}>Sub Category</Box>
        </Flex>
        {Object.entries(categories).map(
          ([key, { main_category: main, sub_category: sub }]) => (
            <Flex>
              <Box flex={1}>{key}</Box>
              <Box flex={1}>{main}</Box>
              <Box flex={1}>{sub}</Box>
            </Flex>
          )
        )}
      </Box>
      <Box>
        <Heading>Products</Heading>
        <Flex
          borderBottomColor="primary.500"
          borderBottomStyle="solid"
          borderBottomWidth={1}
        >
          <Box flex={1}>Retailer Item Number</Box>
          <Box flex={1}>Name</Box>
          <Box flex={2}>Description</Box>
          <Box flex={1}>Price</Box>
          <Box flex={1}>UPC</Box>
          <Box flex={1}>size</Box>
          <Box flex={1}>item type</Box>
          <Box flex={1}>main category</Box>
          <Box flex={1}>manufacturer</Box>
          <Box flex={1}>weight</Box>
          <Box flex={1}>quantity</Box>
        </Flex>
        {products.map((product) => (
          <Flex borderBottom="solid 1px rgba(0,0,0,0.2)" mb={1}>
            <Box flex={1}>{product.retailer_item_number}</Box>
            <Box flex={1}>{product.name}</Box>
            <Box flex={2}>{product.description}</Box>
            <Box flex={1}>
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "TTD",
                currencyDisplay: "narrowSymbol",
              }).format(product.price)}
            </Box>
            <Box flex={1}>{product.UPC}</Box>
            <Box flex={1}>{product.size}</Box>
            <Box flex={1}>{product.item_type}</Box>
            <Box flex={1}>{product.main_category}</Box>
            <Box flex={1}>{product.manufacturer}</Box>
            <Box flex={1}>{product.weight}</Box>
            <Box flex={1}>{product.quantity}</Box>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default Raw;
