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

function App() {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <BrowserRouter>
        <div className="desktopNav">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" Component={AboutMe} />
          <Route path="/history" Component={History} />
          <Route path="/projects" Component={Projects} />
          <Route path="/random" Component={Random} />
          <Route path="/contact" Component={Contact} />
        </Routes>
        {/* TODO: Swipe area doesn't work on desktop */}
        <SwipeableDrawer
          anchor="top"
          open={showDrawer}
          onClose={() => setShowDrawer(false)}
          onDoubleClick={() => setShowDrawer(true)}
          onOpen={() => setShowDrawer(true)}
          PaperProps={{ style: { backgroundColor: "transparent" } }}
          SwipeAreaProps={{
            className: "mobileNav",
          }}
          allowSwipeInChildren={true}
        >
          <Navbar />
        </SwipeableDrawer>
      </BrowserRouter>
    </>
  );
}

export default App;
