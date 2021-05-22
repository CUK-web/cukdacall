import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

class PageElements extends Component {
  render() {
    const { title, img, link } = this.props.elements;
    return (
      <Card>
        <Link to={link} className="linkto">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
        </Link>
      </Card>
    );
  }
}

export default PageElements;
