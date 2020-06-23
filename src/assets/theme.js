import { theme } from "@chakra-ui/core";

// Let's say you want to add custom colors
const vibeTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: {
      50: "#e2fcff",
      100: "#c2e5ef",
      200: "#9fd0df",
      300: "#7bb9d1",
      400: "#57a1c2",
      500: "#3f83a9",
      600: "#2e6484",
      700: "#1f4b5f",
      800: "#0d323c",
      900: "#00141a",
    },
    secondary: {
      50: "#e3fbf4",
      100: "#c3ede0",
      200: "#9fdfcc",
      300: "#7bd2b7",
      400: "#58c5a4",
      500: "#3fab8a",
      600: "#30866b",
      700: "#20604c",
      800: "#0e392e",
      900: "#00150e",
    },
  },
};

export default vibeTheme;
