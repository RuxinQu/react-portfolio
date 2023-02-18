import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TsParticles } from "./component/Tsparticles";
import { Preloader } from "./component/Preloader";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import Contact from "./page/Contact";
import About from "./page/About";
import Work from "./page/Work";
import Resume from "./page/Resume";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Preloader />
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
      <TsParticles />
    </div>
  );
}

export default App;
