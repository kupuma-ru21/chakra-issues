import { ChakraProvider as Provider } from "@chakra-ui/react";
import { system } from "~/theme";

export const ChakraProvider = (props: { children: React.ReactNode }) => {
  return <Provider value={system} {...props} />;
};
