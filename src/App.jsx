import { WelcomePage } from "./pages/WelcomePage";
import { JokeProvider } from "./providers/jokeProvider";

export const App = () => {
  return (
    <JokeProvider>
      <WelcomePage />
    </JokeProvider>
  );
};
