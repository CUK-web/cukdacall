import React, { Component } from 'react';
import PlacePhoto from '../../../components/outSchool/tabMenu/PlacePhoto';

export default class Pub extends Component {
  state = {
    data: [
      {
        title: '시나브로',
        imgData: 'sinabro.png',
        info: '关东煮汤，88面食套餐',
      },
      {
        title: '서울포차',
        imgData: 'seoulpocha.png',
        info: '拌面 & 五花肉，五石排骨',
      },
      {
        title: '역전 할머니 맥주',
        imgData: 'halmack.png',
        info: '芝士猪排，芝士辣炒年糕',
      },
      {
        title: '이자카야 감',
        imgData: 'gam.png',
        info: '金枪鱼泰达基，辣海鲜面',
      },
      {
        title: '삼일포차',
        imgData: 'samil.png',
        info: '披萨，飞鱼籽鸡蛋汤',
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
