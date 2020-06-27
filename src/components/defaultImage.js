import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/core";

const DefaultImage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const formik = useFormik({
    initialValues: {
      file: "",
    },
    validationSchema: Yup.object({}),
    onSubmit: async (values) => {
      const fileInfo = JSON.stringify(
        {
          fileName: values.file.name,
          type: values.file.type,
          size: `${values.file.size} bytes`,
        },
        null,
        2
      );
      console.log(fileInfo);
      onClose();
    },
  });
  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Input
          pr="4.5rem"
          type="file"
          placeholder="Choose file"
          name="file"
          onChange={(event) => {
            formik.setFieldValue("file", event.currentTarget.files[0]);
            onOpen();
          }}
        />

        <Button
          size="md"
          type="submit"
          variant="solid"
          variantColor="secondary"
        >
          Save
        </Button>
      </form>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Image Preview</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <img src={formik.values.file.name} />
          </ModalBody>

          <ModalFooter>
            <Button variantColor="primary" mr={3} onClick={formik.handleSubmit}>
              Upload
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default DefaultImage;
