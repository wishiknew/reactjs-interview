import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./component/Home";
// import ShowEmployee from "./views/employee/show";
import ListEmployee from "./views/employee/list";
import AddEmployee from "./views/employee/add";

function App() {
  return (
    <div className="container">
      <Router>
        <div className="col-md-12">
          <h1 className="text-center" style={style}>
            <Link to="/home">Home</Link>
            <Link to="/employee/list">Employees</Link>
          </h1>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/employee/list" component={ListEmployee} />
            <Route path="/employee/add" component={AddEmployee} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

const style = {
  color: "red",
  margin: "10px",
};

export default App;
