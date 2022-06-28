import { CountdownProvider } from "./context/CountdownContext";
import AnimatedRoutes from "./component/AnimatedRoutes";

function App() {
  return (
    <CountdownProvider>
      <AnimatedRoutes />
    </CountdownProvider>
  );
}

export default App;
