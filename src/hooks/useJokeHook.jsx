import { getJoke } from "../services/api";

export const useJokeHook = () => {
  const load = () => {
    return getJoke();
  };

  return {
    load,
  };
};
