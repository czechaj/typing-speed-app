import React from "react";
import {
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useCounter } from "../../contexts/CounterContext";

function Result() {
  const { results, viewResult, setViewResult } = useCounter();
  return (
    <>
      <Modal isOpen={viewResult}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={"blue.600"}>Result</ModalHeader>
          <ModalCloseButton
            onClick={() => {
              setViewResult(false);
            }}
          />
          <ModalBody>
            <Text>
              {" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                Total keystrokes per minute:{" "}
              </span>{" "}
              {results.keyStrokes}{" "}
            </Text>
            <Text>
              {" "}
              <span style={{ fontWeight: "bold" }}> Correctness: </span> %
              {Math.floor(results.correctness)}{" "}
            </Text>
            <Text>
              {" "}
              <span style={{ fontWeight: "bold" }}> Correct words: </span>{" "}
              {results.successWords}{" "}
            </Text>
            <Text>
              {" "}
              <span style={{ fontWeight: "bold" }}> Wrong words: </span>{" "}
              {results.failWords}{" "}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                setViewResult(false);
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Result;
