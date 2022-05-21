import React from "react";
import { Center, Box } from "@chakra-ui/react";
function Header() {
  return (
    <Center className="logo">
      <Box>Typing Speed App</Box>
    </Center>
  );
}

export default React.memo(Header);
