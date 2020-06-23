import React from "react";
import { Flex, Button } from "@chakra-ui/core";
import { useLocation, Link } from "react-router-dom";

const PageNotFound = () => {
  let location = useLocation();
  return (
    <Flex
      justify="center"
      alignItems="center"
      height="full"
      flexDirection="column"
    >
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
      <Button as={Link} to="/" variant="outline" variantColor="teal">
        Go Home
      </Button>
    </Flex>
  );
};

export default PageNotFound;
