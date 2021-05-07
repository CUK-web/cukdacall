import React, { Component } from 'react';
// import '../../outschool/OutSchool.scss';

export default class PlacePhoto extends Component {
  render() {
    const { title, imgData, info } = this.props.info;
    const { state, idx } = this.props;
    const imgPath = '/images/OutSchool/';
    return (
      <>
        {idx === state ? (
          <>
            <div className="contentsTitle">{title}</div>
            <img src={`${imgPath}${imgData}`} alt="사진" className="photo" />
            <div className="PlaceText">{info}</div>
          </>
        ) : null}
      </>
    );
  }
}
