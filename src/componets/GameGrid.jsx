import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameCard } from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";
import useData from "../hooks/useData";

export const GameGrid = () => {
  const { data, error, loading } = useData("/games");
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {error && <Text>{error}</Text>}

      {!error && (
        <SimpleGrid
          columns={{ sm: 1, md: 3, lg: 3, xl: 4 }}
          gap={{ base: "24px", md: "40px" }}
          padding={"10px"}
        >
          {loading &&
            skeletons.map((skeleton) => (
              <GameCardContainer>
                <GameCardSkeleton key={skeleton} />
              </GameCardContainer>
            ))}
          {data.map((game) => (
            <GameCardContainer>
              <GameCard key={game.id} game={game}></GameCard>
            </GameCardContainer>
          ))}
        </SimpleGrid>
      )}
    </>
  );
};
