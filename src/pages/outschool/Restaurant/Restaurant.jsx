import React, { Component } from 'react';
import PlacePhoto from '../components/PlacePhoto';
import './Restaurant.scss';

export default class Restaurant extends Component {
  state = {
    tabContents: [
      { id: 1, title: '1983pub' },
      { id: 2, title: '삼복가' },
      { id: 3, title: '지지고' },
      { id: 4, title: '학교가는길' },
      { id: 5, title: '크라이치즈버거' },
    ],
    restaurantData: [
      {
        id: 1,
        title: '1983pub',
        imgData: '/images/RestaurentImg/1983.jpg',
        info: '설명',
      },
      {
        id: 2,
        title: '삼복가',
        imgData: '/images/RestaurentImg/삼복가.jpg',
        info: '설명2',
      },
      {
        id: 3,
        title: '지지GO',
        imgData: '/images/RestaurentImg/gggo.png',
        info: '설명3',
      },
      {
        id: 4,
        title: '학교가는길',
        imgData: '/images/RestaurentImg/schoolfood.png',
        info: '설명4',
      },
      {
        id: 5,
        title: '크라이치즈버거',
        imgData: '/images/RestaurentImg/burger.png',
        info: '설명5',
      },
    ],
    resCurrentId: 1,
  };

  handleClick = id => {
    this.setState({ resCurrentId: id });
  };
  render() {
    return (
      <div>
        <section className="outSchoolContainer">
          <header className="description">
            <div className="innerText">
              학교 근처에 있는 밥집으로는 지지고, 꼬밥(컵밥), 메밀꽃,
              삼복(돈가스, 냉면) 등이 있습니다. 학교 정문을 지나 골목 쪽으로
              향하면 신동 Lab(덮밥집), 크라이치즈버거, 엄마 손 칼국시(칼국수),
              학교 가는 길(떡볶이집), 피자 펍 1983이 있습니다. 역 쪽으로 향하게
              되면 삼겹의 난(삼겹살), 등촌 칼국수, 니뽕내뽕(퓨전 짬뽕)이
              있습니다. 그 외에도 다양한 한식, 일식, 중식 등 다양한 메뉴들을
              골라서 먹을 수 있는 밥집들이 많이 있습니다.
            </div>
          </header>
          <section className="outSchoolContents">
            <article className="contentsTabsBox">
              {/* <ContentsTabs /> */}
              {/* {this.state.tabcontents.map(menu => (
                <ContentsTabs
                  key={menu.id}
                  menu={menu}
                  onClick={() => this.handleClick}
                />
              ))} */}
              <ul className="contentsTabs">
                {this.state.tabContents.map((menu, idx) => {
                  return (
                    <li
                      key={menu.id}
                      menu={menu}
                      className="contentsMenu"
                      onClick={() => this.handleClick(idx + 1)}
                    >
                      {menu.title}
                    </li>
                  );
                })}
              </ul>
            </article>
            <article className="contentsBox">
              {this.state.restaurantData.map(data => {
                return (
                  <PlacePhoto
                    info={data}
                    key={data.id}
                    state={this.state.resCurrentId}
                  />
                );
              })}
            </article>
          </section>
        </section>
      </div>
    );
  }
}
