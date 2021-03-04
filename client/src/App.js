//React
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


//Routes
import { About, Contact, Home, Projects } from "./pages/allPages";
import { Header, Footer } from "./components/allComponents";

//Styles
import "./App.css";

function App() {
  return (
    <div className="main-div-container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="*" component={Home}/>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
