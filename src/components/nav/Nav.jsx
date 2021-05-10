import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

export default class Nav extends Component {
  clickHandler = () => {
    window.scrollTo({ left: 0, top: 0 });
  };
  render() {
    return (
      <nav className="navContainer">
        <div className="navLogoBox">
          <Link to="/">
            <img alt="Logo" src="/images/그림1.png" className="navLogoImg" />
          </Link>
        </div>
        <div className="navTitle">
          <ul className="navList">
            <Link to="/insideschool" onClick={this.clickHandler}>
              <li className="inSchool">학교내부</li>
            </Link>
            <Link to="/outsideschool" onClick={this.clickHandler}>
              <li className="outsideSchool">학교외부</li>
            </Link>
            <Link to="/academiccalender" onClick={this.clickHandler}>
              <li className="academCal">학사일정</li>
            </Link>
            <Link to="/classevaluation" onClick={this.clickHandler}>
              <li className="classEval">강의평가</li>
            </Link>
          </ul>
        </div>
      </nav>
    );
  }
}
