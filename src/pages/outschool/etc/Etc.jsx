import React, { Component } from 'react';
import PlacePhoto from '../components/PlacePhoto';
// import './Etc.scss';

export default class Etc extends Component {
  state = {
    tabcontents: [
      { id: 1, title: '기타' },
      { id: 2, title: '기타' },
      { id: 3, title: '기타' },
      { id: 4, title: '기타' },
      { id: 5, title: '기타' },
    ],
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
                  {this.state.tabcontents.map(menu => {
                    return (
                      <li key={menu.id} menu={menu} className="contentsMenu">
                        {menu.title}
                      </li>
                    );
                  })}
                </ul>
              </article>
              <article className="contentsBox">
                <PlacePhoto />
              </article>
            </section>
          </section>
        </div>
      </div>
    );
  }
}
