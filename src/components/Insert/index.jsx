import { useRef, useState } from "react";
import { Input, Text, Box, Center, Button } from "@chakra-ui/react";
import { useCounter } from "../../contexts/CounterContext.jsx";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Result from "../Result/index.jsx";

function Insert() {
  const {
    isPlaying,
    setIsPlaying,
    playRound,
    setPlayRound,
    setKeyStrokes,
    compareWords,
    endGame,
  } = useCounter();

  const [key, setKey] = useState(0);
  const [text, setText] = useState("");
  const inputElement = useRef();

  const handleClick = () => {
    inputElement.current.focus();
    setPlayRound((state) => state + 1);
    setIsPlaying(true);
  };

  const handleChange = (e) => {
    if (isPlaying) {
      setText(e.target.value);
      setKeyStrokes((state) => state + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isPlaying) {
      compareWords(text);
    }
    setText("");
  };
  const endCountDown = () => {
    endGame();
    setText("");
    setKey((state) => state + 1);
  };
  return (
    <>
      <Text visibility={`${isPlaying && "hidden"}`} fontWeight={"bold"}>
        {" "}
        Click to start game{" "}
      </Text>
      <Center w={"80%"} mx={"auto"} alignItems={"baseline"}>
        <form
          className="input"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <Input
            ref={inputElement}
            onSubmit={handleSubmit}
            value={text}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </form>
        <Button disabled={isPlaying} onClick={handleClick}>
          {playRound === 0 ? "Start" : "Restart"}
        </Button>
      </Center>
      <Box display={"flex"} marginTop={10} justifyContent={"center"}>
        <CountdownCircleTimer
          key={key}
          size={80}
          isPlaying={isPlaying}
          onComplete={endCountDown}
          duration={4}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[40, 28, 16, 8]}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </Box>
      <Result />
    </>
  );
}

export default Insert;
