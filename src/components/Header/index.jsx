import React from "react";
import { Center, Box } from "@chakra-ui/react";
function Header() {
  return (
    <Center className="logo" justifyContent={"start"} ps={6}>
      <Box cursor={"pointer"}>Typing Speed App</Box>
    </Center>
  );
}

export default React.memo(Header);
