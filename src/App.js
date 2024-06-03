import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TsParticles } from "./component/Tsparticles";
import { Preloader } from "./component/Preloader";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import Contact from "./page/Contact";
import About from "./page/About";
import Work from "./page/Work";
import Resume from "./page/Resume";
import Hobby from "./page/Hobby";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import "./index.css";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f17105",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Preloader />
          <Header />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/hobby" element={<Hobby />} />
          </Routes>
          <Footer />
        </Router>
        <TsParticles />
      </div>
    </ThemeProvider>
  );
}

export default App;
