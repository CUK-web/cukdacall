import React, { Component } from 'react';

export default class ContentsTabs extends Component {
  render() {
    const { title } = this.props.menu;
    return (
      <div>
        <ul className="contentsTabs">
          <li className="contentsMenu">{title}</li>
        </ul>
      </div>
    );
  }
}
