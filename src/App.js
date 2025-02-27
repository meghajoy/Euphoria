import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/screens/Main";
import Redirectpage from "./components/screens/Redirectpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Homepage" element={<Main />} />
          <Route path="/singlepage/:id" element={<Redirectpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
