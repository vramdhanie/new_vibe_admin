import React, { useState } from "react";
import { Box, Text, Input, Icon } from "@chakra-ui/core";
import { MdFolder } from "react-icons/md";

const ImageInput = ({ title, setValue }) => {
  const [file, setFile] = useState(undefined);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(undefined);

  const fileUpload = React.createRef();
  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let inputFile = e.target.files[0];
    if (inputFile) {
      reader.onloadend = () => {
        setFile(inputFile);
        setImagePreviewUrl(reader.result);
      };

      reader.readAsDataURL(inputFile);
      setValue(inputFile);
    }
  };

  const showFileUpload = () => {
    if (fileUpload) {
      fileUpload.current.click();
    }
  };

  const showPreloadedImage = () => {
    let content = null;
    if (file) {
      content = <img src={imagePreviewUrl} />;
    } else {
      content = <Icon color="primary.600" size="36px" as={MdFolder} />;
    }
    return content;
  };

  return (
    <Box>
      <Input type="file" ref={fileUpload} hidden onChange={handleImageChange} />
      <Text>{title}</Text>
      <Box onClick={showFileUpload} cursor="pointer">
        {showPreloadedImage()}
      </Box>
    </Box>
  );
};

export default ImageInput;
