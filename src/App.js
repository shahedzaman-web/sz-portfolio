import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Projects from "./Components/Projects/Projects";
library.add(fab);
function App() {
  return (
    <Router>
      <div className="background">
        <NavBar />
        <Header></Header>
        <About></About>
        <Services></Services>
        <Projects />
        <Switch>
          <Route to="/about"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
