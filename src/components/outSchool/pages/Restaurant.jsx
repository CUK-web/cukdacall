import React, { Component } from 'react';
import PlacePhoto from '../tabMenu/PlacePhoto';

export default class Restaurant extends Component {
  state = {
    data: [
      // { title: '', imgData: '.png', info: '' },
      {
        title: '메밀꽃 필 무렵',
        imgData: 'memil.png',
        info: '쫄면, 순두부찌개',
      },
      {
        title: '꼬밥',
        imgData: 'ggobab.png',
        info: '삼겹살 김치 컵밥, 스팸마요 컵밥',
      },
      {
        title: '토천 손 칼국수',
        imgData: 'tocheon.png',
        info: '손칼국수, 물만두',
      },
      {
        title: '순미니 김밥',
        imgData: 'soonmini.png',
        info: '매일 바뀌는 오늘의 메뉴, 참치김밥',
      },
      {
        title: '청진동 해장국',
        imgData: 'cheongjin.png',
        info: '뼈다귀 해장국',
      },
      {
        title: '남경 중화요리',
        imgData: 'namkyung.png',
        info: '쟁반짜장, 특제탕수육',
      },
      { title: '홍콩반점', imgData: 'hongkong.png', info: '유린기, 군만두' },
      {
        title: '탕화쿵푸',
        imgData: 'tangwha.png',
        info: '내 맘대로 담아먹는 마라탕',
      },
      {
        title: '대흥 샤브샤브&양꼬치',
        imgData: 'daeheung.png',
        info: '홍탕/백탕 무한리필 샤브샤브, 양꼬치',
      },
      { title: '북경', imgData: 'bukkyung.png', info: '자장면, 짬뽕' },
      { title: '신동랩', imgData: 'sindong.png', info: '스테이크 소보로동' },
      { title: '코바코', imgData: 'cobabco.png', info: '돈까스메밀세트' },
      {
        title: '타코방',
        imgData: 'tacobang.png',
        info: '왕타코야끼, 오코노미야끼',
      },
      {
        title: '스시마리오',
        imgData: 'sushimario.png',
        info: '마리오모듬스시',
      },
      { title: '쇼샤돈부리', imgData: 'sosha.png', info: '가츠동, 규동' },
      {
        title: '새우식탁',
        imgData: 'saewoo.png',
        info: '까르보나라 쉬림프, 로제쉬림프',
      },
      { title: '잇츠', imgData: 'eats.png', info: '알리오올리오, 루꼴라 피자' },
      {
        title: '크라이치즈버거',
        imgData: 'burger.png',
        info: '크라이치즈버거, 더블치즈버거',
      },
      {
        title: '긱인더피그',
        imgData: 'geekinthepig.png',
        info: '파스타, 스테이크',
      },
      {
        title: '1983피자앤펍',
        imgData: '1983.jpg',
        info: '백종원 요거트 피자, 백종원 디아블로 피자',
      },
    ],
  };

  render() {
    return (
      <>
        <header className="description">
          <div className="innerText">
            학교 근처에 있는 밥집으로는 지지고, 꼬밥(컵밥), 메밀꽃, 삼복(돈가스,
            냉면) 등이 있습니다. 학교 정문을 지나 골목 쪽으로 향하면 신동
            Lab(덮밥집), 크라이치즈버거, 엄마 손 칼국시(칼국수), 학교 가는
            길(떡볶이집), 피자 펍 1983이 있습니다. 역 쪽으로 향하게 되면 삼겹의
            난(삼겹살), 등촌 칼국수, 니뽕내뽕(퓨전 짬뽕)이 있습니다. 그 외에도
            다양한 한식, 일식, 중식 등 다양한 메뉴들을 골라서 먹을 수 있는
            밥집들이 많이 있습니다.
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
