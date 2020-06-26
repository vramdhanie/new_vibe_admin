import React from "react";
import {
  Box,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  DrawerFooter,
  useDisclosure,
} from "@chakra-ui/core";
import { MdFilterList } from "react-icons/md";

const ProductFilter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      py={2}
      borderBottomStyle="solid"
      borderBottomColor="primary.200"
      borderBottomWidth={1}
    >
      <IconButton
        variant="outline"
        variantColor="secondary"
        aria-label="Filter product"
        fontSize="20px"
        icon={MdFilterList}
        onClick={onOpen}
      />
      The product filter here
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth="1px"
            color="secondary.50"
            backgroundColor="secondary.800"
          >
            Welcome
          </DrawerHeader>
          <DrawerCloseButton
            onClick={onClose}
            _focus={{ outline: "none" }}
            color="secondary.50"
          />
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">The footer</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default ProductFilter;
