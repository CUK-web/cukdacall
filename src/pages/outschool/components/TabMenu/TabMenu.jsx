import React, { Component } from 'react';
// import OutSchoolContainer from '../../../outSchoolContainer/outSchoolContainer';
import Restaurant from '../../Restaurant/Restaurant';
import Pub from '../../pub/Pub';
import Cafe from '../../cafe/Cafe';
import Etc from '../../etc/Etc';
import './TabMenu.scss';

export default class componentName extends Component {
  state = {
    currentId: 1,
  };
  clickHandler = id => {
    this.setState({ currentId: id });
    console.log('하이');
  };

  render() {
    return (
      <>
        <ul className="tabs">
          {CATEGORY_ARR.map((category, idx) => {
            return (
              <li
                key={idx}
                onClick={() => this.clickHandler(idx + 1)}
                className="tabsMenu"
              >
                {category}
              </li>
            );
          })}
        </ul>
        <section className="outSchoolContainer">
          {CURRENT_ID[this.state.currentId]}
          {/* <header className="description">
            <Description />
          </header>
          <section className="outSchoolContents">
            <article className="contentsTabsBox">
              <ContentsTabs />
            </article>
            <article className="contentsBox">
              <PlacePhoto />
              <PlaceText />
            </article>
          </section> */}
        </section>
      </>
    );
  }
}

const CURRENT_ID = {
  1: <Restaurant />,
  2: <Pub />,
  3: <Cafe />,
  4: <Etc />,
};

const CATEGORY_ARR = ['식당', '술집', '카페', '기타'];
