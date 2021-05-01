import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import SubjInfo from './SubjInfo';

class EvalList extends Component {
  render() {
    const { name, prof, subjnum } = this.props.subject;
    const { onClick } = this.props;
    return (
      <>
        <Button variant="primary" onClick={onClick}>
          {name}, {prof} ({subjnum})
        </Button>
        {this.props.state === this.props.id ? (
          <SubjInfo subject={this.props.subject} />
        ) : null}
      </>
    );
  }
}

export default EvalList;
