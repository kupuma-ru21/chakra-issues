import { createSystem, defaultConfig, defineRecipe } from "@chakra-ui/react";

const buttonRecipe = defineRecipe({
  variants: {
    variant: {
      navbar: {
        bgColor: "red.100",
        _hover: { bgColor: "blue.100" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, {
  theme: { recipes: { button: buttonRecipe } },
});
