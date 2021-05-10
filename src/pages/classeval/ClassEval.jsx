import React, { Component } from 'react';
import Nav from '../../components/nav/Nav';
import './ClassEval.scss';
import EvalList from '../../components/classeval/EvalList';

class ClassEval extends Component {
  evalElements = [
    {
      id: 1,
      name: '경영학원론',
      prof: '코지',
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
    {
      id: 5,
      name: '투자론',
      prof: '공매도',
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
    {
      id: 6,
      name: '투자론',
      prof: '공매도',
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
    {
      id: 7,
      name: '투자론',
      prof: '공매도',
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
    {
      id: 8,
      name: '투자론',
      prof: '공매도',
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
    {
      id: 9,
      name: '투자론',
      prof: '공매도',
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
    {
      id: 10,
      name: '투자론',
      prof: '공매도',
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
    {
      id: 11,
      name: '투자론',
      prof: '공매도',
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
    {
      id: 12,
      name: '투자론',
      prof: '공매도',
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
    {
      id: 13,
      name: '투자론',
      prof: '공매도',
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
    window.scrollTo({ left: 0, top: 0 });
  };

  render() {
    return (
      <>
        <Nav />
        <div className="evalContainer">
          <div className="evalListTab">
            {this.evalElements.map(subject => (
              <EvalList
                key={subject.id}
                subject={subject}
                id={subject.id}
                state={this.state.currentId}
                onClick={() => this.clickHandler(subject.id)}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default ClassEval;
