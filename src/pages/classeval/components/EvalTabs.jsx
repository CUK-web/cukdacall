import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import SubjInfo from './SubjInfo';

class EvalTabs extends Component {
  // reviewFilter = item => {
  //   this.setState({ reviewId: item });
  // };
  render() {
    return (
      <>
        <SubjInfo
          key={this.props.key}
          subject={this.props.subject}
          id={this.props.id}
        />
      </>
    );
  }
}

export default EvalTabs;
