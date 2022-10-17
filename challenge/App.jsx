import Greeting from "../challenge/Greeting";
import MouseTracker from "./MouseTracker";
import Shouter from "./Shouter";

function App() {
  return (
    <main>
      <Greeting name="oli" />
      <Shouter />
      <MouseTracker />
    </main>
  );
}

export default App;
