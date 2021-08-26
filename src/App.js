import React from 'react';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Program__Calendar from './components/Program__Calendar/Program__Calendar';
import HHW__Outline from './components/HHW__Outline/HHW__Outline';
import Contact from './components/Contact/Contact';
import Mentor__Profile from './components/User__Profile/Mentor__Profile';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/program-calendar">
          <Program__Calendar />
        </Route>
        <Route path="/hhw-outline">
          <HHW__Outline />
        </Route>
        <Route path="/mentor-profile">
          <Mentor__Profile />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;