import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

export const GameGrid = () => {
  const { games, error, loading } = useGames();
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
            skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
          {games.map((game) => (
            <GameCard key={game.id} game={game}></GameCard>
          ))}
        </SimpleGrid>
      )}
    </>
  );
};
