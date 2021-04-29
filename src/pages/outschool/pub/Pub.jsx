import React, { Component } from 'react';
import PlacePhoto from '../components/PlacePhoto';
// import './Pub.scss';

export default class Pub extends Component {
  state = {
    tabcontents: [
      { id: 1, title: '시나브로' },
      { id: 2, title: '서울포차' },
      { id: 3, title: '육회지존' },
      { id: 4, title: 'pub' },
      { id: 5, title: 'pub' },
    ],
    pubData: [
      {
        id: 1,
        title: '시나브로',
        imgData: '/images/PubImg/pub1.png',
        info: '설명',
      },
      {
        id: 2,
        title: '서울포차',
        imgData: '/images/PubImg/pub2.png',
        info: '설명',
      },
      {
        id: 3,
        title: '육회지존',
        imgData: '/images/PubImg/pub3.png',
        info: '설명123',
      },
    ],
    pubCurrentId: 1,
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
              {this.state.pubData.map(data => {
                return (
                  <PlacePhoto
                    info={data}
                    key={data.id}
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
