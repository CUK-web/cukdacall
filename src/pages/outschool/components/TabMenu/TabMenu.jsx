import React, { Component } from 'react';
import Restaurant from '../../Restaurant/Restaurant';
import Pub from '../../pub/Pub';
import Cafe from '../../cafe/Cafe';
import Etc from '../../etc/Etc';
import Description from '../Description';
import './TabMenu.scss';

const components = { 1: <Restaurant />, 2: <Pub />, 3: <Cafe />, 4: <Etc /> };
const categories = ['식당', '술집', '카페', '기타'];

export default class TabMenu extends Component {
  state = {
    currentId: 1,
  };

  clickHandler = id => {
    this.setState({ currentId: id });
    console.log('화긴');
  };

  render() {
    // console.log(this.props.item.title);

    // const { title } = this.props.item;

    return (
      <>
        <ul className="tabs">
          {categories.map((category, idx) => {
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
          {components[this.state.currentId]}
          {/* <header className="description">
          <Description />
        </header> */}
          {/* <section className="outSchoolContents">
          <article className="contentsTabsBox">
            <ul className="contentsTabs">
              <li className="contentsMenu">{title}</li>
            </ul> */}
          {/* <ContentsTabs /> */}
          {/* </article>
          <article className="contentsBox"> */}
          {/* <div className="photo">{imgData}</div>
            <div className="PlaceText">{text}</div> */}
          {/* </article> */}
        </section>
        {/* </section> */}
      </>
    );
  }
}
