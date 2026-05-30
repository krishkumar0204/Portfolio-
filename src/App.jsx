import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Projects from "./components/Projects";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="pt-28 md:pt-32">
        {/* add top padding so fixed navbar doesn't cover content */}
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
