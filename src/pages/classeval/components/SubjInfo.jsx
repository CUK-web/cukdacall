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
      <div className="subjInfo">
        <span>과목이름:</span> <>{name}</>
        <div>교수이름: {prof}</div>
        <div>과목번호: {subjnum}</div>
        <div>수강학기: {semester}</div>
        <div>교재정보: {book}</div>
        <div>과제: {assign}</div>
        <div>팀플: {teamplay}</div>
        <div>학점비율: {grade}</div>
        <div>출결: {attendance}</div>
        <div>시험횟수: {test}</div>
        <div>총점: {score}</div>
        <div>총평: {review}</div>
      </div>
    );
  }
}
export default SubjInfo;
