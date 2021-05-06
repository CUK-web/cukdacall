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
        <span>과목이름:</span> {name}
        <br />
        <span>교수이름:</span> {prof}
        <br />
        <span>과목번호:</span> {subjnum}
        <br />
        <span>수강학기:</span> {semester}
        <br />
        <span>교재정보:</span> {book}
        <br />
        <span>과제:</span> {assign}
        <br />
        <span>팀플:</span> {teamplay}
        <br />
        <span>학점비율:</span> {grade}
        <br />
        <span>출결:</span> {attendance}
        <br />
        <span>시험횟수:</span> {test}
        <br />
        <span>총점:</span> {score}
        <br />
        <span>총평:</span> {review}
      </div>
    );
  }
}
export default SubjInfo;
