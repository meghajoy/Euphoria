import "./App.css";
import Header from "./components/header/Header";
import Spotlight from "./components/spotlight/Spotlight";
import Arrival from "./components/new arrival/Arrival";
import Explore from "./components/explore/Explore";
import MiniSpotlight from "./components/minispotlight/MiniSpotlight";

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
