import { Box, Heading } from "@chakra-ui/react";
import { useCounter } from "../../contexts/CounterContext";

function WordArea() {
  const { words, activeWord, failWords, successWords, isPlaying } =
    useCounter();
  return (
    <Box
      visibility={`${!isPlaying && "hidden"}`}
      border={"1px"}
      my={4}
      mx={"auto"}
      width={"80%"}
      textAlign={"left"}
      padding={"1rem"}
    >
      {words.map((word, key) => (
        <Box key={key} display={"inline"}>
          <span
            className={`words ${activeWord === words[key] && "active"} ${
              failWords.includes(words[key]) && "failed"
            } ${successWords.includes(words[key]) && "success"} `}
            key={key}
          >
            {word}
          </span>
          <span> </span>
        </Box>
      ))}{" "}
    </Box>
  );
}

export default WordArea;
