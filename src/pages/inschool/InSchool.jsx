import React, { Component } from 'react';
import Nav from '../../components/nav/Nav';
import './InSchool.scss';

class InSchool extends Component {
  render() {
    return (
      <div className="insideTotal">
        <Nav />
        <div className="insideImg">
          <img src="/images/inschoolimage.png" alt="사진" className="img" />
        </div>
      </div>
    );
  }
}

export default InSchool;
