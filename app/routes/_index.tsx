import { HStack, useBreakpointValue } from "@chakra-ui/react";
import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const variant = useBreakpointValue(
    {
      base: "outline",
      md: "solid",
    },
    {
      // Breakpoint to use when mediaqueries cannot be used, such as in server-side rendering
      // (Defaults to 'base')
      fallback: "md",
    }
  );
  console.log("variant", variant);

  return (
    <HStack>
      <Button variant="navbar">Click me</Button>
      <Button>Click me</Button>
    </HStack>
  );
}
