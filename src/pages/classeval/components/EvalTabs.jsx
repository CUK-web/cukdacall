import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import './EvalTabs.scss';

class EvalTabs extends Component {
  render() {
    const { name, prof, subjnum } = this.props.subject;
    return (
      <Tabs defaultActiveKey="profile">
        <Tab eventKey="home" title={name}>
          {/* <Sonnet /> */}
        </Tab>
        <Tab eventKey="profile" title={prof}>
          {/* <Sonnet /> */}
        </Tab>
        <Tab eventKey="contact" title={subjnum} disabled>
          {/* <Sonnet /> */}
        </Tab>
      </Tabs>
    );
  }
}

export default EvalTabs;
