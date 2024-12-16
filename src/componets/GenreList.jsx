import React from "react";
import useData from "../hooks/useData";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = ({ onSelectGenre, selectedGenre }) => {
  const { data, loading, error } = useData("/genres");
  const genres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <>
      {error && ""}
      {loading && (
        <List>
          {genres.map((genre) => (
            <GenreListSkeleton key={genre} />
          ))}
        </List>
      )}
      <>
        <Heading fontSize={"2xl"} marginBottom={3}>
          Genres
        </Heading>
        <List>
          {data.map((genre) => (
            <ListItem key={genre.id} paddingY={2}>
              <HStack>
                <Image
                  objectFit={"cover"}
                  boxSize={"32px"}
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Button
                  fontSize={"lg"}
                  whiteSpace={"normal"}
                  textAlign={"left"}
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                  variant={"link"}
                  onClick={() => onSelectGenre(genre)}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
        </List>
      </>
    </>
  );
};

export default GenreList;
