import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import History from "./pages/History";
import Projects from "./pages/Projects";
import Random from "./pages/Random";
import Contact from "./pages/Contact";
import { SwipeableDrawer } from "@mui/material";
import { useState } from "react";
import LanguageContextProvider from "./context/Language";
import Services from "./pages/Services";

function App() {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <LanguageContextProvider>
      <BrowserRouter>
        <div className="desktopNav">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" Component={AboutMe} />
          <Route path="/services" Component={Services} />
          <Route path="/history" Component={History} />
          <Route path="/projects" Component={Projects} />
          <Route path="/random" Component={Random} />
          <Route path="/contact" Component={Contact} />
        </Routes>
        <SwipeableDrawer
          anchor="bottom"
          open={showDrawer}
          onClose={() => setShowDrawer(false)}
          onOpen={() => setShowDrawer(true)}
          PaperProps={{
            style: { backgroundColor: "transparent" },
          }}
          SwipeAreaProps={{
            className: "mobileNav",
            onClick: () => setShowDrawer(true),
          }}
          allowSwipeInChildren={true}
        >
          <Navbar />
        </SwipeableDrawer>
      </BrowserRouter>
    </LanguageContextProvider>
  );
}

export default App;
