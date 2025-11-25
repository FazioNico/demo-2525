import { useEffect, useState } from "react";
import { JokeContext } from "../contexts/jokeContext";
import { useJokeHook } from "../hooks/useJokeHook";

export const JokeProvider = ({ children }) => {
  const [joke, setJoke] = useState(undefined);
  const { load } = useJokeHook();

  useEffect(() => {
    if (!joke) {
      load().then((value) => {
        setJoke(value);
      });
    }
  }, [load, joke]);

  return <JokeContext.Provider value={joke}>{children}</JokeContext.Provider>;
};
