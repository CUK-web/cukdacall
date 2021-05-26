import React, { Component } from 'react';
import PlacePhoto from '../tabMenu/PlacePhoto';

export default class Cafe extends Component {
  state = {
    data: [
      {
        title: '오르다',
        imgData: 'orda.png',
        info: '华夫饼，奥利奥，马卡龙，美式咖啡',
      },
      {
        title: '넘버원',
        imgData: 'numberone.png',
        info: '草莓拿铁，香草拿铁',
      },
      {
        title: '분더 커피',
        imgData: 'wunder.png',
        info: '다쿠아즈, 분더가토',
      },
      {
        title: '네트 커피',
        imgData: 'netcoffee.png',
        info: '美式咖啡, 아인슈페너',
      },
      {
        title: '상상테라스',
        imgData: 'sangsang.png',
        info: '플레인요거트 스무디, 딸기 요거트 스무디',
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
