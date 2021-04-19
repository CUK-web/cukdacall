import React, { Component } from 'react';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="teamName">팀 이름</div>
        <div className="teamIntro">팀 소개</div>
        <div className="schoolNaebu">학교내부</div>
        <div className="schoolWaebu">학교외부</div>
        <div className="academicIljung">학사일정</div>
        <div className="classPyungga">강의평가</div>
      </div>
    );
  }
}

export default Main;
