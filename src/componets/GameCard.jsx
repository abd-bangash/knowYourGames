import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { PlatformIconsList } from "./PlatformIconsList";

export const GameCard = ({ game }) => {
  return (
    <Card maxW="sm" borderRadius={"10px"} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <PlatformIconsList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};
