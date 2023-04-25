import React from 'react';
import { Card } from 'react-bootstrap';

const NewsCard = ({news}) => {
    const {_id, title, details, thumbnail_url, image_url} = news;

    return (
        <Card>
        <Card.Header>{title}</Card.Header>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {' '}
              {details}
              {' '}
            </p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    );
};

export default NewsCard;

