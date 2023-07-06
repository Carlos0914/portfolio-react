import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import History from "./pages/History";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={AboutMe} />
          <Route path="/history" Component={History} />
          <Route path="/projects" Component={Projects} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
