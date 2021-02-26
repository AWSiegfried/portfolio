//React
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Styles
import "./App.css";

//Routes
import { About, Contact, Home, Projects } from "./pages/allPages";
import { Navbar, Footer } from "./components/allComponents";
function App() {
  return (
    <div className="main-div-container">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="*" component={Home}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
