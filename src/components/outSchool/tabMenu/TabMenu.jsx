import React, { Component } from 'react';
import Restaurant from '../pages/Restaurant';
import Pub from '../pages/Pub';
import Cafe from '../pages/Cafe';
import Etc from '../pages/Etc';

const components = { 1: <Restaurant />, 2: <Pub />, 3: <Cafe />, 4: <Etc /> };
const categories = ['식당', '술집', '카페', '기타'];

export default class TabMenu extends Component {
  state = {
    currentId: 1,
  };

  clickHandler = id => {
    this.setState({ currentId: id });
  };

  render() {
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
        </section>
      </>
    );
  }
}
