import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="navLogoBox">
          <img
            alt="Logo"
            src="https://www.catholic.ac.kr/front/imgs/common/logo_header_mobile.png"
            className="navLogoImg"
          />
        </div>
        <div className="navTitle">
          <ul className="navList">
            <Link to="/insideschool">
              <li className="inSchool">학교내부</li>
            </Link>
            <Link to="/outsideschool">
              <li className="outSchool">학교외부</li>
            </Link>
            <Link to="/academiccalender">
              <li className="academCal">학사일정</li>
            </Link>
            <Link to="/classevaluation">
              <li className="classEval">강의평가</li>
            </Link>
          </ul>
        </div>
      </nav>
    );
  }
}
