import { Heading } from "@chakra-ui/react";
import React from "react";

const GameHeading = ({ gameQuery }) => {
  const heading = `${gameQuery?.platform?.name || ""} ${
    gameQuery?.genre?.name || ""
  } ${"Games"}`;
  return (
    <Heading as={"h1"} fontSize={"5xl"} marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
