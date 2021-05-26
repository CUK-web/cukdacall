import React, { Component } from 'react';
import PlacePhoto from '../tabMenu/PlacePhoto';

export default class Etc extends Component {
  state = {
    data: [
      {
        title: '경인문고',
        imgData: 'kyungin.png',
        info: '每天 10:00-22:00 / 春节，中秋节休息',
      },
      {
        title: '다큐 카피',
        imgData: 'docucopy.png',
        info: '平日 09:00-19:40 / 周末，公休日休息',
      },
      {
        title: '교내 복사실',
        imgData: 'gyonae.png',
        info: '平日 08:00-20:00 / 周六 10:00-16:00 / 日, 公休日休息',
      },
      {
        title: '용서점',
        imgData: 'yongseo.png',
        info: '12:00-20:00 / 周一, 周日休息',
      },
      {
        title: '프린트 카페',
        imgData: 'printcafe.png',
        info: '每日  00:00-24:00',
      },
      {
        title: '알파 문구',
        imgData: 'alpha.png',
        info: '平日 08:30-20:00 / 周六 09:00-19:00 / 周日休息',
      },
      {
        title: '그린팜 마트',
        imgData: 'greenfarm.png',
        info: '每天 00:00-24:00',
      },
      {
        title: '홈플러스 익스프레스',
        imgData: 'homeplus.png',
        info: '每天 10:00-23:00 / 第二, 第四个星期天休息',
      },
    ],
  };

  render() {
    return (
      <>
        <section className="outSchoolContents">
          {this.state.data.map((menu, idx) => {
            return <PlacePhoto key={idx} info={menu} />;
          })}
        </section>
      </>
    );
  }
}
