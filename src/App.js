import "./App.css";
import Header from "./components/includes/Header";
import Spotlight from "./components/screens/Spotlight";
import Arrival from "./components/screens/Arrival";
import Explore from "./components/screens/Explore";
import MiniSpotlight from "./components/screens/MiniSpotlight";

function App() {
  return (
    <>
      <Header />
      <Spotlight />
      <Explore />
      <Arrival />
      <MiniSpotlight />
    </>
  );
}

export default App;
