import React, { useContext } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  IconButton,
  useToast,
} from "@chakra-ui/core";
import { Link } from "react-router-dom";
import InventoryContext from "../../data/inventoryContext";
import ProductSearch from "./productSearch";
import ProductSummary from "./productSummary";
import { MdAddCircleOutline, MdExposurePlus1 } from "react-icons/md";
import ProductFilter from "./productFilter";

const Product = () => {
  const { inventory, addProduct } = useContext(InventoryContext);
  const toast = useToast();
  const addProductHandler = () => {
    //add a product
    const product = {
      retailer_item_number: 3398,
      name: "VIZO BLUETOOTH WIRELESS HEADSET",
      description: "MULTI PORT PAIRING, 10M",
      size: null,
      price: 75.0,
      UPC: 1957359821635,
      item_type: "Inventory",
      main_category: "computers",
      sub_category: "accessories",
      manufacturer: null,
      weight: 0,
      quantity: 0,
      image:
        "https://firebasestorage.googleapis.com/v0/b/new-vibe.appspot.com/o/images%2Fdefault.png?alt=media&token=f7418ccd-22ff-43d1-8830-d4aeaef94af5",
    };
    addProduct(product).then(() => {
      toast({
        title: "Product Added",
        description: "Successfully created a new product!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    });
  };

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
          <ProductFilter />
          <IconButton
            position="absolute"
            bottom={200}
            right={20}
            variant="solid"
            variantColor="secondary"
            aria-label="Add product"
            fontSize="24px"
            isRound="true"
            icon={MdExposurePlus1}
            _focus={{
              outline: "none",
            }}
            transition="all 0.5s linear"
            boxShadow="1px 1px 2px 2px rgba(0,0,0,0.2)"
            onClick={addProductHandler}
          />
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
