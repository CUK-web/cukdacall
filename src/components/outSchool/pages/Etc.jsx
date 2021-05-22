import React, { Component } from 'react';
import PlacePhoto from '../tabMenu/PlacePhoto';

export default class Etc extends Component {
  state = {
    data: [
      {
        title: '경인문고',
        imgData: 'kyungin.png',
        info: '매일 10:00-22:00 / 설날, 추석날 휴무',
      },
      {
        title: '다큐 카피',
        imgData: 'docucopy.png',
        info: '평일 09:00-19:40 / 주말, 공휴일 휴무',
      },
      {
        title: '교내 복사실',
        imgData: 'gyonae.png',
        info: '평일 08:00-20:00 / 토 10:00-16:00 / 일, 공휴일 휴무',
      },
      {
        title: '용서점',
        imgData: 'yongseo.png',
        info: '12:00-20:00 / 월, 일 휴무',
      },
      {
        title: '프린트 카페',
        imgData: 'printcafe.png',
        info: '매일 00:00-24:00',
      },
      {
        title: '알파 문구',
        imgData: 'alpha.png',
        info: '평일 08:30-20:00 / 토요일 09:00-19:00 / 일요일 휴무',
      },
      {
        title: '그린팜 마트',
        imgData: 'greenfarm.png',
        info: '매일 00:00-24:00',
      },
      {
        title: '홈플러스 익스프레스',
        imgData: 'homeplus.png',
        info: '매일 10:00-23:00 / 둘째, 넷째 일요일 휴무',
      },
    ],
  };

  render() {
    return (
      <>
        <header className="description"></header>
        <section className="outSchoolContents">
          {this.state.data.map((menu, idx) => {
            return <PlacePhoto key={idx} info={menu} />;
          })}
        </section>
      </>
    );
  }
}
