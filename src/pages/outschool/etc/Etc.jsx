import React, { Component } from 'react';
import Description from '../components/Description';
import ContentsTabs from '../components/ContentsTabs';
import PlacePhoto from '../components/PlacePhoto';
import PlaceText from '../components/PlaceText';
import './Etc.scss';

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
              <Description />
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
                <PlaceText />
              </article>
            </section>
          </section>
        </div>
      </div>
    );
  }
}
