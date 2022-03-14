import { Content, ContextProvider } from "./contexts/userContext";
import { Rotas } from "./routes";

function App() {
  return (
    <>
      <ContextProvider>
        <Rotas />
      </ContextProvider>
    </>
  );
}

export default App;
