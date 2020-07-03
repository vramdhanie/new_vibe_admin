import React, { useContext, useEffect, useState } from "react";
import raw_products from "../../raw/data.json";
import { Box, Heading, Flex, Image } from "@chakra-ui/core";
import raw_categories from "../../raw/categories";
import useImage from "../../hooks/useImage";
import { FirebaseContext } from "../../firebase";

const Raw = () => {
  const { firebase } = useContext(FirebaseContext);
  const { image } = useImage(firebase.storage);

  const [products, setProducts] = useState(raw_products);
  const [categories, setCategories] = useState(raw_categories);

  useEffect(() => {
    setProducts(
      raw_products.map((product) => ({
        ...product,
        image: image,
        ...categories[product.main_category],
      }))
    );
  }, [image]);

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
            <Flex key={key}>
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
          <Box flex={1}>Category</Box>
          <Box flex={1}>manufacturer</Box>
          <Box flex={1}>weight</Box>
          <Box flex={1}>quantity</Box>
          <Box flex={1}>Image</Box>
        </Flex>
        {products[0] ? (
          <Flex borderBottom="solid 1px rgba(0,0,0,0.2)" mb={1}>
            <Box flex={1}>{products[0].retailer_item_number}</Box>
            <Box flex={1}>{products[0].name}</Box>
            <Box flex={2}>{products[0].description}</Box>
            <Box flex={1}>
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "TTD",
                currencyDisplay: "narrowSymbol",
              }).format(products[0].price)}
            </Box>
            <Box flex={1}>{products[0].UPC}</Box>
            <Box flex={1}>{products[0].size}</Box>
            <Box flex={1}>{products[0].item_type}</Box>
            <Box flex={1}>
              {products[0].main_category}/{products[0].sub_category}
            </Box>
            <Box flex={1}>{products[0].manufacturer}</Box>
            <Box flex={1}>{products[0].weight}</Box>
            <Box flex={1}>{products[0].quantity}</Box>
            <Box flex={1}>
              <Image src={products[0].image} />
            </Box>
          </Flex>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
};

export default Raw;
