import React, { Component } from 'react';
import PlacePhoto from '../../../components/outSchool/tabMenu/PlacePhoto';

export default class Pub extends Component {
  state = {
    tabcontents: ['시나브로', '서울포차', '육회지존', 'pub', 'pub'],
    pubData: [
      {
        title: '시나브로',
        imgData: 'pub1.png',
        info: '설명',
      },
      {
        title: '서울포차',
        imgData: 'pub2.png',
        info: '설명',
      },
      {
        title: '육회지존',
        imgData: 'pub3.png',
        info: '설명123',
      },
    ],
    pubCurrentId: 0,
  };

  handleChange = id => {
    this.setState({ pubCurrentId: id });
  };

  render() {
    return (
      <div>
        <section className="outSchoolContainer">
          <header className="description">
            가톨릭대학교 근처 술집으로는 오사카 부루스, 시나브로, 삼일포차,
            서울포차, 비어킹, 크라운호프, 육회지존, 이자카야 감이 있습니다.
          </header>
          <section className="outSchoolContents">
            <article className="contentsTabsBox">
              <ul className="contentsTabs">
                {this.state.tabcontents.map((menu, idx) => {
                  return (
                    <li
                      key={idx}
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
              {this.state.pubData.map((data, idx) => {
                return (
                  <PlacePhoto
                    info={data}
                    key={idx}
                    idx={idx}
                    state={this.state.pubCurrentId}
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
