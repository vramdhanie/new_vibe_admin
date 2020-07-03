import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button } from "@chakra-ui/core";
import ImageInput from "./imageInput";
import { FirebaseContext } from "../firebase";
import useImage from "../hooks/useImage";

const DefaultImage = () => {
  const { firebase } = useContext(FirebaseContext);
  const { image, setImage } = useImage(firebase.storage);

  console.log(image);

  const FILE_SIZE = 160 * 1024;
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png",
  ];
  const formik = useFormik({
    initialValues: {
      file: "",
    },
    validationSchema: Yup.object().shape({
      file: Yup.mixed()
        .required("A file is required")
        .test(
          "fileSize",
          "File too large",
          (value) => value && value.size <= FILE_SIZE
        )
        .test(
          "fileFormat",
          "Unsupported Format",
          (value) => value && SUPPORTED_FORMATS.includes(value.type)
        ),
    }),
    onSubmit: async (values) => {
      let storageRef = firebase.storage.ref();
      let defaultImage = storageRef.child("images/default.png");
      defaultImage.put(values.file).then((snapshot) => {
        defaultImage.getDownloadURL().then((url) => setImage(url));
      });
    },
  });
  return (
    <Box flex={1} textAlign="center">
      <form onSubmit={formik.handleSubmit}>
        <ImageInput
          title="Select a file"
          {...formik.getFieldProps("file")}
          {...formik.getFieldHelpers("file")}
          url={image}
        />
        {formik.touched.file && formik.errors.file ? (
          <Box color="red" fontSize="sm">
            {formik.errors.file}
          </Box>
        ) : null}

        <Button
          size="md"
          type="submit"
          variant="solid"
          variantColor="secondary"
        >
          Save
        </Button>
      </form>
    </Box>
  );
};

export default DefaultImage;
