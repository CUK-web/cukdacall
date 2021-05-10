import React, { Component } from 'react';
import './Main.scss';
import PageCards from './components/PageCards';

class Main extends Component {
  state = {
    cardElements: [
      {
        id: 1,
        title: '학교내부',
        img: '/images/inschoolicon.svg',
        link: '/insideschool',
      },
      {
        id: 2,
        title: '학교외부',
        img: '/images/outschoolicon.svg',
        link: '/outsideschool',
      },
      {
        id: 3,
        title: '학사일정',
        img: '/images/calendaricon.svg',
        link: '/academiccalender',
      },
      {
        id: 4,
        title: '강의평가',
        img: '/images/classevalicon.svg',
        link: '/classevaluation',
      },
    ],
  };
  render() {
    return (
      <div className="mainContainer">
        <div className="title">
          <span className="titleText">CUKDACALL</span>
        </div>
        <div>
          <div className="cardContainer">
            <PageCards cardElements={this.state.cardElements} />
          </div>
          <div className="teamIntro">
            ‘중국 투자와 통상 캡스톤 디자인’ 과목을 수강하는 학생들이 모인 팀{' '}
            <span className="highlight">CUK共 打(da) call</span>입니다. <br />
            <br />
            우리는 학교에 있는 중국 유학생들과 인터뷰 하는 과정에서 <br />
            COVID-19로 인해 중국 유학생들이 학교 생활에서 고립감을 느끼는 문제를
            알게 되었습니다. <br />
            모든 것이 생소한 타국 생활에 언어도 통하지 않는 여러 어려움을 겪고
            있는 중국 유학생들의 고충은 <br /> 함께 학교생활을 하는 입장에서
            <span className="highlight">꼭 해결하고 싶은 문제</span> 였습니다.
            <br />
            <br />
            <span className="highlight">CUK共 打(da) call</span>은 중국
            유학생들의 학교 적응을 원활히 돕기 위해
            <br />
            ‘가톨릭대 가이드북’을 만들었습니다.
            <br /> <br /> 이 사이트의 이용자는 학교 내부의 건물의 이름과 위치
            등을 한눈에 확인할 수 있습니다. <br /> 학교 주변에 어떤 식당과 카페
            정보와 수업에 필요한 물품을 구매하는 위치를 확인할 수 있습니다.
            <br />
            뿐만 아니라, 학교 수업에 대한 정보와 과제의 여부 등, 자체적인 수업
            평가 기능을 통해 수업을 듣기 전 미리 자신이 들을 수업의 정보를
            확인할 수 있습니다. <br />
            <br />
            중국 친구들의 성공적인 유학생활을{' '}
            <span className="highlight">CUK共 打(da)call</span>이
            응원하겠습니다!
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
