import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { SearchInput } from "./componets/SearchInput";

function NavBar() {
  return (
    <HStack padding={"10px"}>
      <Image src={logo} boxSize={"60px"}></Image>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
