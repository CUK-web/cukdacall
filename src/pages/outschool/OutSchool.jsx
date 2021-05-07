import React, { Component } from 'react';
import Nav from '../../components/nav/Nav';
import TabMenu from '../../components/outSchool/tabMenu/TabMenu';
import './OutSchool.scss';

export default class outSchool extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="outSchool">
          <TabMenu />
        </div>
      </>
    );
  }
}
