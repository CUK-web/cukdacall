import React, { Component } from 'react';
import PageElements from './PageElements';

class PageCards extends Component {
  render() {
    return (
      <>
        {this.props.cardElements.map(elements => (
          <PageElements key={elements.id} elements={elements} />
        ))}
      </>
    );
  }
}

export default PageCards;
