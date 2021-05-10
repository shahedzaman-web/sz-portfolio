import "./App.css";
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import AboutPage from "./Components/AboutPage/AboutPage";
library.add(fab);
function App() {
  return (
    <Router>
      <div className="background">
        <Switch>
          <Route exact path="/">
            <NavBar />
            <Header></Header>

            <About></About>
            <Services></Services>
            <Projects />
            <Contact />
            <Footer></Footer>
          </Route>
          <Route path="/aboutPage">
            <AboutPage></AboutPage>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
