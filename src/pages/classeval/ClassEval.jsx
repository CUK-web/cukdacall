import React, { Component } from 'react';
import Nav from '../../components/nav/Nav';
import './ClassEval.scss';
import EvalList from './components/EvalList';

class ClassEval extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="evalContainer">
          <div className="evalPageDesc">강평페이지설명</div>
          <div className="evalListContainer">
            <div className="evalListSearch">리스트검색</div>
            <div className="evalList">
              평가리스트
              <div className="evalListTab">
                <EvalList />
              </div>
            </div>
          </div>
          <div className="evalInfoContainer">
            <div className="subjName">과목이름</div>
            <div className="profName">교수이름</div>
            <div className="semester">수강학기</div>
            <div className="bookName">교재정보</div>
            <div className="assignment">과제 0번/1번/2번/3번이상</div>
            <div className="teamPlay">팀플 없음/보통/많음</div>
            <div className="grade">
              학점비율 잘줌/비율채워줌/깐깐함/성적미확인
            </div>
            <div className="attendence">
              출결 혼용/직접호명/지정좌석/전자출결/반영안함
            </div>
            <div className="testCount">시험횟수: 세번이상/두번/한번/없음</div>
            <div className="totalScore">총점 1/2/3/4/5</div>
            <div className="totalReview">총평 어쩌고저쩌고</div>
          </div>
        </div>
      </>
    );
  }
}

export default ClassEval;
