import React, { Component } from 'react';
// import '../../outschool/OutSchool.scss';

export default class PlacePhoto extends Component {
  render() {
    const { title, imgData, info, id } = this.props.info;
    const { state } = this.props;
    return (
      <>
        {id === state ? (
          <>
            <div className="contentsTitle">{title}</div>
            <img src={imgData} alt="사진" className="photo" />
            <div className="PlaceText">{info}</div>
          </>
        ) : null}
      </>
    );
  }
}
