import { List, ListItem, Skeleton } from "@chakra-ui/react";
import React from "react";

const GenreListSkeleton = () => {
  return (
    <ListItem>
      <Skeleton height={"32px"} mb={4} />
    </ListItem>
  );
};

export default GenreListSkeleton;
