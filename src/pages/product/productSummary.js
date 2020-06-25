import React, { useContext } from "react";
import { Flex, Box, Text } from "@chakra-ui/core";

const ProductSummary = ({ name, description, image, price, id }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <Flex
      flexDirection="row"
      width="full"
      borderBottomColor="gray.200"
      borderBottomStyle="solid"
      borderBottomWidth={1}
      mb={2}
    >
      <Box flex={1} py={2}>
        <img src={image} alt={description} className="w-12 my-0 mx-auto ma" />
      </Box>
      <Box px={{ xs: 2, md: 6 }} py={2} flex={3}>
        <Text fontSize="md" mb={2}>
          {name}
        </Text>
        <Text color="gray.700" fontSize="sm">
          {description}
        </Text>
      </Box>

      <div className="flex-1 text-lg text-red-400 font-bold">
        {formatter.format(price)}
      </div>
    </Flex>
  );
};

export default ProductSummary;
