import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import React from "react";

export const GameCard = ({ game }) => {
  return (
    <Card maxW="sm" borderRadius={"10px"} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};
