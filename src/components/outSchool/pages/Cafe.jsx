import React, { Component } from 'react';
import PlacePhoto from '../tabMenu/PlacePhoto';

export default class Cafe extends Component {
  state = {
    data: [
      {
        title: '오르다',
        imgData: 'orda.png',
        info: '와플, 오레오 마카롱, 아메리카노',
      },
      {
        title: '넘버원',
        imgData: 'numberone.png',
        info: '딸기 라떼, 조리퐁 라떼',
      },
      {
        title: '분더 커피',
        imgData: 'wunder.png',
        info: '다쿠아즈, 분더가토',
      },
      {
        title: '네트 커피',
        imgData: 'netcoffee.png',
        info: '아메리카노, 아인슈페너',
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
        <header className="description">
          <div className="innerText">
            가톨릭대학교 근처 카페로는 학교 앞에 있는 오르다, 다방구, 오르고,
            New Day, 밀다, 상상테라스, 할리스 등 휴식 혹은 공부를 위한 공간이
            다양하게 마련되어 있습니다.
          </div>
        </header>
        <section className="outSchoolContents">
          {this.state.data.map((menu, idx) => {
            return <PlacePhoto key={idx} info={menu} />;
          })}
        </section>
      </>
    );
  }
}
