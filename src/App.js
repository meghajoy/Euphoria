import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Women from "./components/screens/Women";
import Men from "./components/screens/Men";
import Main from "./components/screens/Main";
import Redirectpage from "./components/screens/Redirectpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Women's>" element={<Women />} />
          <Route path="/Men's>" element={<Men />} />
          <Route path="/Homepage" element={<Main />} />
          <Route path="/Product/:id" element={<Redirectpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
