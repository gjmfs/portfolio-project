import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { NotFound } from "./components/NotFound";
import Contact from "./components/Contact";
import { About } from "./components/About";
function App() {
  return (
    <>
      <div className="App bg-dark">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
