import React, { useContext } from "react";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";
import InventoryContext from "../../data/inventoryContext";

const ProductSearch = () => {
  const { inventory, search } = useContext(InventoryContext);
  const formik = useFormik({
    initialValues: {
      productName: "",
    },
    validationSchema: Yup.object({
      productName: Yup.string().required("Please enter a value"),
    }),
    onSubmit: async (values) => {
      const { productName } = values;
      search(productName);
    },
  });
  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type="text"
            placeholder="product name"
            name="productName"
            {...formik.getFieldProps("productName")}
          />
          <InputRightElement width="4.5rem">
            <Button h="full" size="md" type="submit">
              Search
            </Button>
          </InputRightElement>
        </InputGroup>
      </form>
    </Box>
  );
};

export default ProductSearch;
