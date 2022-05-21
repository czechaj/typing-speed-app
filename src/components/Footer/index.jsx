import React from "react";
import { Box } from "@chakra-ui/react";

function Footer() {
  return (
    <Box
      mt={6}
      w={"100%"}
      height={"7vh"}
      bgColor={"ThreeDShadow"}
      color={"whitesmoke"}
      position={"fixed"}
      bottom={0}
    >
      made by czechaj
    </Box>
  );
}

export default React.memo(Footer);
