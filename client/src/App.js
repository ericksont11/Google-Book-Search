import React, { Component } from "react";
import "./App.css";
import MainPage from './pages/mainpage';
import SavedPage from './pages/savedpage';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/books/saved" component={SavedPage} />
        </>
      </Router>
    );
  }
}

export default App;
