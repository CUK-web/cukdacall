import React, { Component } from 'react';
import PlacePhoto from '../tabMenu/PlacePhoto';

export default class Etc extends Component {
  state = {
    tabcontents: ['기타', '기타2', '기타3', '기타4', '기타5'],
    etcData: [
      { title: '하이', imgData: '', info: '설명1' },
      { title: '하이', imgData: '', info: '설명2' },
      { title: '하이', imgData: '', info: '설명3' },
      { title: '하이', imgData: '', info: '설명4' },
    ],
    etcCurrentId: 0,
  };

  handleChange = id => {
    this.setState({ etcCurrentId: id });
  };

  render() {
    return (
      <div>
        <div>
          <section className="outSchoolContainer">
            <header className="description">
              다큐카피(복사실), 다이소, 그린팜마트, 알파문구 등 기타 물품을 구할
              수 있는 장소들이 있습니다
            </header>
            <section className="outSchoolContents">
              <article className="contentsTabsBox">
                {/* <ContentsTabs /> */}
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
                {this.state.etcData.map((data, idx) => {
                  return (
                    <PlacePhoto
                      info={data}
                      key={idx}
                      idx={idx}
                      state={this.state.etcCurrentId}
                    />
                  );
                })}
                {/* {etcData[this.state.etcCurrentId]} */}
              </article>
            </section>
          </section>
        </div>
      </div>
    );
  }
}
