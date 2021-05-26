import React, { Component } from 'react';
import PlacePhoto from '../tabMenu/PlacePhoto';

export default class Restaurant extends Component {
  state = {
    data: [
      // { title: '', imgData: '.png', info: '' },
      {
        title: '메밀꽃 필 무렵',
        type: '韩餐专卖店',
        imgData: 'memil.png',
        info: '쫄면, 순두부찌개',
      },
      {
        title: '꼬밥',
        type: '杯饭专卖店',
        imgData: 'ggobab.png',
        info: '삼겹살 김치 컵밥, 스팸마요 컵밥',
      },
      {
        title: '토천 손 칼국수',
        type: '刀削面专卖店',
        imgData: 'tocheon.png',
        info: '손칼국수, 물만두',
      },
      {
        title: '순미니 김밥',
        type: '紫菜包饭',
        imgData: 'soonmini.png',
        info: '매일 바뀌는 오늘의 메뉴, 참치김밥',
      },
      {
        title: '청진동 해장국',
        type: '醒酒汤',
        imgData: 'cheongjin.png',
        info: '뼈다귀 해장국',
      },
      {
        title: '남경 중화요리',
        type: '中餐店',
        imgData: 'namkyung.png',
        info: '쟁반짜장, 특제탕수육',
      },
      {
        title: '홍콩반점',
        type: '中餐店',
        imgData: 'hongkong.png',
        info: '유린기, 군만두',
      },
      {
        title: '탕화쿵푸',
        type: '麻辣烫',
        imgData: 'tangwha.png',
        info: '내 맘대로 담아먹는 마라탕',
      },
      {
        title: '대흥 샤브샤브&양꼬치',
        type: '火锅 & 羊肉串',
        imgData: 'daeheung.png',
        info: '홍탕/백탕 무한리필 샤브샤브, 양꼬치',
      },
      {
        title: '북경',
        type: '中华料理',
        imgData: 'bukkyung.png',
        info: '자장면, 짬뽕',
      },
      {
        title: '신동랩',
        type: '日式盖饭专卖店',
        imgData: 'sindong.png',
        info: '스테이크 소보로동',
      },
      {
        title: '코바코',
        type: '日式猪排饭专卖店',
        imgData: 'cobabco.png',
        info: '돈까스메밀세트',
      },
      {
        title: '타코방',
        type: '章鱼小丸子',
        imgData: 'tacobang.png',
        info: '왕타코야끼, 오코노미야끼',
      },
      {
        title: '스시마리오',
        type: '寿司',
        imgData: 'sushimario.png',
        info: '마리오모듬스시',
      },
      {
        title: '쇼샤돈부리',
        type: '日式盖饭',
        imgData: 'sosha.png',
        info: '가츠동, 규동',
      },
      {
        title: '새우식탁',
        type: '西式意面',
        imgData: 'saewoo.png',
        info: '까르보나라 쉬림프, 로제쉬림프',
      },
      {
        title: '잇츠',
        type: '意面·披萨',
        imgData: 'eats.png',
        info: '알리오올리오, 루꼴라 피자',
      },
      {
        title: '크라이치즈버거',
        type: '汉堡',
        imgData: 'burger.png',
        info: '크라이치즈버거, 더블치즈버거',
      },
      {
        title: '긱인더피그',
        type: '意面·牛排',
        imgData: 'geekinthepig.png',
        info: '파스타, 스테이크',
      },
      {
        title: '1983피자앤펍',
        type: '披萨·啤酒',
        imgData: '1983.jpg',
        info: '백종원 요거트 피자, 백종원 디아블로 피자',
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
