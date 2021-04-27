import React, { Component } from 'react';
import Nav from '../../components/nav/Nav';
import './ClassEval.scss';
import EvalList from './components/EvalList';

class ClassEval extends Component {
  evalElements = [
    {
      id: 1,
      name: '경영학원론',
      prof: '코지',
      subjnum: '12-34',
      semester: '1학기',
      book: '옆집 개도 배우는 경영학',
      assign: '3회',
      teamplay: '없음',
      grade: '잘줌',
      attendance: '직접호명',
      test: '두번',
      score: '3',
      review: '교수님이 귀여우십니다.',
    },
    {
      id: 2,
      name: '회계학원론',
      prof: '순이',
      subjnum: '34-12',
      semester: '2학기',
      book: '우리집 개도 배우는 회계학',
      assign: '1회',
      teamplay: '많음',
      grade: '깐깐함',
      attendance: '지정좌석',
      test: '세번이상',
      score: '1',
      review: '교수님이 사나우십니다.',
    },
    {
      id: 3,
      name: '코인학개론',
      prof: '가주아',
      subjnum: '56-78',
      semester: '1학기',
      book: '코인과 경마 그 사이',
      assign: '2회',
      teamplay: '보통',
      grade: '비율채워줌',
      attendance: '혼용',
      test: '한번',
      score: '5',
      review: '교수님이 자꾸 한강 사진 올리십니다.',
    },
    {
      id: 4,
      name: '투자론',
      prof: '공매도',
      subjnum: '78-56',
      semester: '1학기',
      book: '기도매매법과 종교 그 사이',
      assign: '0회',
      teamplay: '없음',
      grade: '성적미확인',
      attendance: '전자출결',
      test: '없음',
      score: '4',
      review: '교수님이 갑자기 연락이 안됩니다.',
    },
  ];
  state = { currentId: 0 };

  clickHandler = id => {
    this.setState({ currentId: id });
  };

  render() {
    return (
      <>
        <Nav />
        <div className="evalContainer">
          {/* <div className="evalPageDesc">강평페이지설명</div> */}
          <div className="evalListContainer">
            {/* <div className="evalListSearch">리스트검색</div> */}
            <div className="evalList">
              {/* 평가리스트 */}
              <div className="evalListTab">
                {this.evalElements.map(subject => (
                  <EvalList
                    key={subject.id}
                    subject={subject}
                    id={subject.id}
                    state={this.state}
                    onClick={() => this.clickHandler(subject.id)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="evalInfoContainer">
            {/* <div className="subjName">과목이름</div>
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
            <div className="totalReview">총평 어쩌고저쩌고</div> */}
          </div>
        </div>
      </>
    );
  }
}

export default ClassEval;
