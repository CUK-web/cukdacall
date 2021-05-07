import React, { Component } from 'react';
import PlacePhoto from '../tabMenu/PlacePhoto';

export default class Cafe extends Component {
  state = {
    tabcontents: ['오르고', 'NewDay', '상상테라스', '카페', '카페'],
    cafeData: [
      {
        title: '오르고',
        imgData: 'cafe1.png',
        info: '설명',
      },
      {
        title: 'NewDay',
        imgData: 'cafe2.png',
        info: '설명',
      },
      {
        title: '상상테라스',
        imgData: 'cafe3.png',
        info: '설명',
      },
    ],
    cafeCurrentId: 0,
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
                        key={idx}
                        menu={menu}
                        className="contentsMenu"
                        onClick={() => this.handleChange(idx)}
                      >
                        {menu}
                      </li>
                    );
                  })}
                </ul>
              </article>
              <article className="contentsBox">
                {this.state.cafeData.map((data, idx) => {
                  return (
                    <PlacePhoto
                      info={data}
                      key={idx}
                      idx={idx}
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
