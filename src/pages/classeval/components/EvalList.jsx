import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import EvalTabs from './EvalTabs';
import SubjInfo from './SubjInfo';

class EvalList extends Component {
  render() {
    const { name, prof, subjnum } = this.props.subject;
    const { onClick } = this.props;
    return (
      <ul>
        <Button variant="primary" onClick={onClick}>
          {name}, {prof} ({subjnum})
        </Button>
        {this.props.state.currentId === this.props.id ? (
          <SubjInfo subject={this.props.subject} />
        ) : null}
      </ul>
    );
  }
}

export default EvalList;
