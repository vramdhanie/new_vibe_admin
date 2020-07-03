import React, { useState } from "react";
import { Box, Text, Input, Icon, Image, Flex } from "@chakra-ui/core";
import { MdFolder } from "react-icons/md";

const ImageInput = ({ title, setValue, url }) => {
  const [file, setFile] = useState(undefined);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(url);

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
      content = (
        <Image
          src={imagePreviewUrl}
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          objectFit="cover"
        />
      );
    } else {
      content = <Icon color="primary.600" size="36px" as={MdFolder} />;
    }
    return content;
  };

  return (
    <Box>
      <Input type="file" ref={fileUpload} hidden onChange={handleImageChange} />

      <Flex
        justifyContent="center"
        alignItems="center"
        onClick={showFileUpload}
        cursor="pointer"
        position="relative"
        height={100}
        flexDirection="column"
      >
        <Text zIndex={2} color="primary.800" fontWeight="bold">
          {title}
        </Text>
        {showPreloadedImage()}
      </Flex>
    </Box>
  );
};

export default ImageInput;
