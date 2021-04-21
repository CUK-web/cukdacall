import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AcademCal from './pages/academcal/AcademCal';
import ClassEval from './pages/classeval/ClassEval';
import InSchool from './pages/inschool/InSchool';
import Main from './pages/main/Main';
import OutSchool from './pages/outschool/OutSchool';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Link to="/"></Link>
        <Link to="/insideschool"></Link>
        <Link to="/outsideschool"></Link>
        <Link to="/academiccalender"></Link>
        <Link to="/classevaluation"></Link>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/insideschool" component={InSchool} />
          <Route exact path="/outsideschool" component={OutSchool} />
          <Route exact path="/academiccalender" component={AcademCal} />
          <Route exact path="/classevaluation" component={ClassEval} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
