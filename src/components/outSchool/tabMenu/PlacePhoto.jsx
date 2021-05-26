import React, { Component } from 'react';

export default class PlacePhoto extends Component {
  render() {
    const { imgData, info, title, type } = this.props.info;
    const imgPath = '/images/OutSchool/';
    return (
      <>
        <ul className="contentsTabs">
          <img src={`${imgPath}${imgData}`} alt="사진" className="photo" />
          <li className="contentsTitle">
            {title}
            <br />
            {type}
          </li>
          <div className="PlaceText">{info}</div>
        </ul>
      </>
    );
  }
}
