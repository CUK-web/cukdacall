import React, { Component } from 'react';
import TabMenu from '../../components/outSchool/tabMenu/TabMenu';
import './OutSchool.scss';

export default class outSchool extends Component {
  render() {
    return (
      <>
        <div className="outSchool">
          <TabMenu />
        </div>
      </>
    );
  }
}
