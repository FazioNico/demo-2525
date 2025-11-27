import { useJokeHook } from "../hooks/useJokeHook";

export const LoadButton = () => {
  const { load } = useJokeHook();
  const handleClick = () => {
    load();
  };
  return <button onClick={handleClick}>load upd from Github</button>;
};
