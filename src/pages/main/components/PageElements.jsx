import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

class PageElements extends Component {
  render() {
    const { title, text, img, link } = this.props.elements;
    return (
      <Card>
        <Link to={link}>
          <Card.Img variant="top" src={img} />
        </Link>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default PageElements;
