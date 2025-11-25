import { useContext } from "react";
import { JokeContext } from "../contexts/jokeContext";

export const useJokeContext = () => {
  const joke = useContext(JokeContext);
  return {
    joke,
  };
};
