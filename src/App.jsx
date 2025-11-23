import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AboutMe from "./pages/AboutMe/AboutMe";
import History from "./pages/History/History";
// import Projects from "./pages/Projects/Projects";
import Random from "./pages/Random/Random";
import Contact from "./pages/Contact/Contact";
import Services from "./pages/Services/Services";
import NotFound from "./pages/NotFound/NotFound";
import LanguageContextProvider from "./context/Language";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <LanguageContextProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" Component={AboutMe} />
            <Route path="/services" Component={Services} />
            <Route path="/history" Component={History} />
            {/* <Route path="/projects" Component={Projects} /> */}
            <Route path="/random" Component={Random} />
            <Route path="/contact" Component={Contact} />
            <Route path="*" Component={NotFound} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageContextProvider>
  );
}

export default App;
