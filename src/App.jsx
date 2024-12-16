import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./NavBar";
import { GameGrid } from "./componets/GameGrid";
import GenreList from "./componets/GenreList";
import { useState } from "react";
import PlatformSelector from "./componets/PlatformSelector";
import SortSelector from "./componets/SortSelector";

function App() {
  const [gameQuery, setGameQuery] = useState({});

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={3}>
          <GenreList
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <HStack spacing={5} marginBottom={5} paddingLeft={2}>
          <PlatformSelector
            selectedPlatformName={gameQuery?.platform?.name}
            setSelectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            sortOrder={gameQuery?.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
