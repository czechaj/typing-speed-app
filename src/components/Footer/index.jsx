import React from "react";
import { Box } from "@chakra-ui/react";

function Footer() {
  return (
    <Box
      mt={6}
      w={"100%"}
      height={"7vh"}
      bgColor={"#000000cc;"}
      color={"whitesmoke"}
      position={"fixed"}
      bottom={0}
    >
      made by{" "}
      <a
        className="footer-link"
        href="https://github.com/czechaj"
        target={"blank"}
      >
        czechaj
      </a>
    </Box>
  );
}

export default React.memo(Footer);
