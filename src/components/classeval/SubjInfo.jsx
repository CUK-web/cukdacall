import React, { Component } from 'react';

class SubjInfo extends Component {
  render() {
    const {
      name,
      prof,
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
        <span className="lists">과목이름</span> :{' '}
        <span className="details">{name}</span>
        <br />
        <span className="lists">교수이름</span> :{' '}
        <span className="details">{prof}</span>
        <br />
        <span className="lists">수강학기</span> :{' '}
        <span className="details">{semester}</span>
        <br />
        <span className="lists">교재정보</span> :{' '}
        <span className="details">{book}</span>
        <br />
        <span className="lists">과제</span> :{' '}
        <span className="details">{assign}</span>
        <br />
        <span className="lists">팀플</span> :{' '}
        <span className="details">{teamplay}</span>
        <br />
        <span className="lists">학점비율</span> :{' '}
        <span className="details">{grade}</span>
        <br />
        <span className="lists">출결</span> :{' '}
        <span className="details">{attendance}</span>
        <br />
        <span className="lists">시험횟수</span> :{' '}
        <span className="details">{test}</span>
        <br />
        <span className="lists">총점</span> :{' '}
        <span className="details">{score}</span>
        <br />
        <span className="lists">총평</span> :{' '}
        <span className="details">{review}</span>
      </div>
    );
  }
}
export default SubjInfo;
