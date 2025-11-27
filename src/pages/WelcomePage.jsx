import { LoadButton } from "../components/LoadButton";
import { useJokeContext } from "../hooks/useContext";

export const WelcomePage = () => {
  const { joke } = useJokeContext();
  return (
    <>
      <h1>{joke ? joke : "loading..."}</h1>
      <p>firday work...</p>
      <LoadButton />
    </>
  );
};
