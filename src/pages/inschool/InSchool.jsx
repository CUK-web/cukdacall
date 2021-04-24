import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import Nav from '../../components/nav/Nav';
import './InSchool.scss';

class InSchool extends Component {
  render() {
    return (
      <>
        <Nav />
        <Image src="/images/inschoolimage.png" fluid />
      </>
    );
  }
}

export default InSchool;
