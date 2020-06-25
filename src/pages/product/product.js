import React, { useContext } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  IconButton,
} from "@chakra-ui/core";
import { Link } from "react-router-dom";
import InventoryContext from "../../data/inventoryContext";
import ProductSearch from "./productSearch";
import ProductSummary from "./productSummary";
import { MdAddCircleOutline } from "react-icons/md";

const Product = () => {
  const { inventory } = useContext(InventoryContext);
  return (
    <Box px={8} py={2}>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Products</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Box mt={4}>
        <ProductSearch />
        <Box>
          {inventory.map((product) => (
            <ProductSummary {...product} key={product.id} />
          ))}
        </Box>
      </Box>
      <IconButton
        position="absolute"
        bottom={20}
        right={20}
        variant="solid"
        variantColor="secondary"
        aria-label="Add product"
        fontSize="24px"
        isRound="true"
        icon={MdAddCircleOutline}
        _focus={{
          outline: "none",
        }}
        transition="all 0.5s linear"
        boxShadow="1px 1px 2px 2px rgba(0,0,0,0.2)"
      />
    </Box>
  );
};

export default Product;
