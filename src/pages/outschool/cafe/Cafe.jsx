import React, { Component } from 'react';
import PlacePhoto from '../components/PlacePhoto';

export default class Cafe extends Component {
  state = {
    tabcontents: [
      { id: 1, title: '오르고' },
      { id: 2, title: 'NewDay' },
      { id: 3, title: '상상테라스' },
      { id: 4, title: '카페' },
      { id: 5, title: '카페' },
    ],
    cafeData: [
      {
        id: 1,
        title: '오르고',
        imgData: '/images/CafeImg/cafe1.png',
        info: '설명',
      },
      {
        id: 2,
        title: 'NewDay',
        imgData: '/images/CafeImg/cafe2.png',
        info: '설명',
      },
      {
        id: 3,
        title: '상상테라스',
        imgData: '/images/CafeImg/cafe3.png',
        info: '설명',
      },
    ],
    cafeCurrentId: 1,
  };

  handleChange = id => {
    this.setState({ cafeCurrentId: id });
  };

  render() {
    return (
      <div>
        <div>
          <section className="outSchoolContainer">
            <header className="description">
              가톨릭대학교 근처 카페로는 학교 앞에 있는 오르다, 다방구, 오르고,
              New Day, 밀다, 상상테라스, 할리스 등 휴식 혹은 공부를 위한 공간이
              다양하게 마련되어 있습니다.
            </header>
            <section className="outSchoolContents">
              <article className="contentsTabsBox">
                <ul className="contentsTabs">
                  {this.state.tabcontents.map((menu, idx) => {
                    return (
                      <li
                        key={menu.id}
                        menu={menu}
                        className="contentsMenu"
                        onClick={() => this.handleChange(idx + 1)}
                      >
                        {menu.title}
                      </li>
                    );
                  })}
                </ul>
              </article>
              <article className="contentsBox">
                {this.state.cafeData.map(data => {
                  return (
                    <PlacePhoto
                      info={data}
                      key={data.id}
                      state={this.state.cafeCurrentId}
                    />
                  );
                })}
              </article>
            </section>
          </section>
        </div>
      </div>
    );
  }
}
