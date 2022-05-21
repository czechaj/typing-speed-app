import { createContext, useContext, useState } from "react";
import randomWords from "random-words";

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [words, setWords] = useState(randomWords(100));
  const [turn, setTurn] = useState(0);
  const [playRound, setPlayRound] = useState(0);
  const [keyStrokes, setKeyStrokes] = useState(0);
  const [activeWord, setActiveWord] = useState(words[0]);
  const [counter, setCounter] = useState(60);
  const [isPlaying, setIsPlaying] = useState(false);
  const [successWords, setSuccessWords] = useState([]);
  const [failWords, setFailWords] = useState([]);
  const [results, setResults] = useState({});
  const [viewResult, setViewResult] = useState(false);

  const compareWords = (input) => {
    if (activeWord === input) {
      setSuccessWords((state) => [...state, activeWord]);
    } else {
      setFailWords((state) => [...state, activeWord]);
    }
    setActiveWord(words[turn + 1]);
    setTurn((state) => state + 1);
  };
  const endGame = () => {
    setResults({
      keyStrokes: keyStrokes,
      successWords: successWords.length,
      failWords: failWords.length,
      correctness:
        (successWords.length / (successWords.length + failWords.length)) * 100,
    });
    const newWords = randomWords(100);
    setTurn(0);
    setIsPlaying(false);
    setWords(newWords);
    setSuccessWords([]);
    setFailWords([]);
    setActiveWord(newWords[0]);
    setKeyStrokes(0);
    setViewResult(true);
  };

  const values = {
    isPlaying,
    setIsPlaying,
    results,
    setResults,
    viewResult,
    setViewResult,
    playRound,
    setPlayRound,
    successWords,
    setSuccessWords,
    failWords,
    setFailWords,
    turn,
    setTurn,
    counter,
    setCounter,
    words,
    setWords,
    activeWord,
    setActiveWord,
    keyStrokes,
    setKeyStrokes,
    compareWords,
    endGame,
  };

  return (
    <CounterContext.Provider value={values}>{children}</CounterContext.Provider>
  );
};

const useCounter = () => useContext(CounterContext);

export { useCounter, CounterProvider };
