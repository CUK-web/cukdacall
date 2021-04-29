import React, { Component } from 'react';

class SubjInfo extends Component {
  render() {
    const {
      name,
      prof,
      subjnum,
      semester,
      book,
      assign,
      teamplay,
      grade,
      attendance,
      test,
      score,
      review,
    } = this.props.subject;

    return (
<<<<<<< HEAD
      <div className="subjInfo">
=======
      <div className>
>>>>>>> 1c4f36d4811a153691b30e3856ba577064f24139
        과목이름: {name}
        <br />
        교수이름: {prof}
        <br />
        과목번호: {subjnum}
        <br />
        수강학기: {semester}
        <br />
        교재정보: {book}
        <br />
        과제: {assign}
        <br />
        팀플: {teamplay}
        <br />
        학점비율: {grade}
        <br />
        출결: {attendance}
        <br />
        시험횟수: {test}
        <br />
        총점: {score}
        <br />
        총평: {review}
      </div>
    );
  }
}
export default SubjInfo;
