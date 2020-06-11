import { theme } from "@chakra-ui/core";

// Let's say you want to add custom colors
const vibeTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
    secondary: {
      900: "#808080",
    },
  },
};

export default vibeTheme;
