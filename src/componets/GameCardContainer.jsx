import { Box } from "@chakra-ui/react";
import { Children } from "react";

export const GameCardContainer = ({ children }) => {
  return (
    <Box borderRadius={"10px"} overflow={"hidden"}>
      {children}
    </Box>
  );
};
