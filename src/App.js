import logo from "./logo.svg";
import { NavbarContainer } from "./container/NavbarContainer";
import { AboutMe } from "./component/About";
import "./App.css";
import "./index.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <NavbarContainer />
      <AboutMe/>
    </div>
  );
}

export default App;
