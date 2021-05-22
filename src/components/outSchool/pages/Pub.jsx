import React, { Component } from 'react';
import PlacePhoto from '../../../components/outSchool/tabMenu/PlacePhoto';

export default class Pub extends Component {
  state = {
    data: [
      {
        title: '시나브로',
        imgData: 'sinabro.png',
        info: '우뎅탕, 88분식 세트',
      },
      {
        title: '서울포차',
        imgData: 'seoulpocha.png',
        info: '쫄면&삼겹살, 오돌갈비',
      },
      {
        title: '역전 할머니 맥주',
        imgData: 'halmack.png',
        info: '치즈 돈까스, 치즈 라볶이',
      },
      {
        title: '이자카야 감',
        imgData: 'gam.png',
        info: '참치 타다끼, 나가사키 얼큰 짬뽕',
      },
      {
        title: '삼일포차',
        imgData: 'samil.png',
        info: '피자전, 날치알 계란탕',
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
