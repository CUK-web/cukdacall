import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AcademCal from './pages/academcal/AcademCal';
import ClassEval from './pages/classeval/ClassEval';
import Main from './pages/main/Main';
import InSchool from './pages/inschool/InSchool';
import Nav from '../src/components/nav/Nav';
import Footer from '../src/components/footer/Footer';

import OutSchool from './pages/outschool/OutSchool';

class Routes extends Component {
  render() {
    let HideNav = window.location.pathname === '/' ? null : <Nav />;
    return (
<<<<<<< HEAD
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/nav" component={Nav} />
          <Route exact path="/footer" component={Footer} />
          <Route exact path="/insideschool" component={InSchool} />
          <Route exact path="/footer" component={Footer} />
          <Route exact path="/outsideschool" component={OutSchool} />
          <Route exact path="/academiccalender" component={AcademCal} />
          <Route exact path="/classevaluation" component={ClassEval} />
        </Switch>
        <Footer />
      </Router>
=======
      // <Nav>
      <>
        <Router>
          {/* <Link to="/main">Main</Link>
          <Link to="/nav">Nav</Link>
          <Link to="/footer">footer</Link>
          <Link to="/insideschool">Inside School</Link>
          <Link to="/outsideschool">Outside School</Link>
          <Link to="/academiccalender">Academic Calender</Link>
          <Link to="/classevaluation">Class Evaluation</Link> */}
          {HideNav}
          {/* <Nav /> */}
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/insideschool" component={InSchool} />
            <Route exact path="/outsideschool" component={OutSchool} />
            <Route exact path="/academiccalender" component={AcademCal} />
            <Route exact path="/classevaluation" component={ClassEval} />
          </Switch>
          <Footer />
        </Router>
      </>
>>>>>>> 95d71c1e1220aa186c08fccac7aa2c512a4e2794
    );
  }
}

export default Routes;
