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
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <div>
              <Nav />
              <Route exact path="/insideschool" component={InSchool} />
              <Route exact path="/outsideschool" component={OutSchool} />
              <Route exact path="/academiccalender" component={AcademCal} />
              <Route exact path="/classevaluation" component={ClassEval} />
            </div>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default Routes;
