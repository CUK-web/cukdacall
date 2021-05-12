import React, { Component } from 'react';
import PlacePhoto from '../tabMenu/PlacePhoto';

export default class Etc extends Component {
  state = {
    data: [
      { title: '하이', imgData: '', info: '설명1' },
      { title: '하이', imgData: '', info: '설명2' },
      { title: '하이', imgData: '', info: '설명3' },
      { title: '하이', imgData: '', info: '설명4' },
    ],
  };

  render() {
    return (
      <>
        <header className="description">
          <div className="innerText">
            다큐카피(복사실), 다이소, 그린팜마트, 알파문구 등 기타 물품을 구할
            수 있는 장소들이 있습니다
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
