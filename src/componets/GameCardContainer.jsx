import { Box } from "@chakra-ui/react";
import { Children } from "react";

export const GameCardContainer = ({ children }) => {
  return (
    <Box width={"300px"} borderRadius={"10px"} overflow={"hidden"}>
      {children}
    </Box>
  );
};
