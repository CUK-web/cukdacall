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
        <span className="lists">科目名字</span> :{' '}
        <span className="details">{name}</span>
        <br />
        <span className="lists">教授名字</span> :{' '}
        <span className="details">{prof}</span>
        <br />
        <span className="lists">学期</span> :{' '}
        <span className="details">{semester}</span>
        <br />
        <span className="lists">教材查询</span> :{' '}
        <span className="details">{book}</span>
        <br />
        <span className="lists">课题</span> :{' '}
        <span className="details">{assign}</span>
        <br />
        <span className="lists">小组项目</span> :{' '}
        <span className="details">{teamplay}</span>
        <br />
        <span className="lists">学分比重</span> :{' '}
        <span className="details">{grade}</span>
        <br />
        <span className="lists">出勤缺席</span> :{' '}
        <span className="details">{attendance}</span>
        <br />
        <span className="lists">考试次数</span> :{' '}
        <span className="details">{test}</span>
        <br />
        <span className="lists">总分</span> :{' '}
        <span className="details">{score}</span>
        <br />
        <span className="lists">总评</span> :{' '}
        <span className="details">{review}</span>
      </div>
    );
  }
}
export default SubjInfo;
