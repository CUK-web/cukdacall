import React, { Component } from 'react';
// import '../../outschool/OutSchool.scss';

export default class PlacePhoto extends Component {
  render() {
    const { imgData, info, title } = this.props.info;
    const imgPath = '/images/OutSchool/';
    return (
      <>
        <ul className="contentsTabs">
          <img src={`${imgPath}${imgData}`} alt="사진" className="photo" />
          <li className="contentsTitle">{title}</li>
          <div className="PlaceText">{info}</div>
        </ul>
      </>
    );
  }
}
