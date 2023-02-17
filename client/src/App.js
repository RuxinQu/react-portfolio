import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Preloader } from "./component/Preloader";
import { Footer } from "./component/Footer";
import Contact from "./page/Contact";
import About from "./page/About";
import Work from "./page/Work";
import Resume from "./page/Resume";
import Header from "./page/Header";
import "./App.css";
import "./index.css";
import "./styles.css";

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
    </div>
  );
}

export default App;
