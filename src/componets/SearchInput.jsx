import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

export const SearchInput = ({ onSearch }) => {
  const ref = useRef(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          placeholder="Search games..."
          ref={ref}
          variant={"filled"}
          borderRadius={20}
        />
      </InputGroup>
    </form>
  );
};
