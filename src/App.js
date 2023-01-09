import logo from "./logo.svg";
import { NavbarContainer } from "./container/NavbarContainer";
import { AboutMe } from "./component/About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavbarContainer />
      <AboutMe/>
    </div>
  );
}

export default App;
