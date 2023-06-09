import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import EditorInsights from '../EditorsInsights/EditorInsights';

const News = () => {
    const news = useLoaderData();
    console.log(news)
    const {_id, title, details, image_url, author, rating, total_view, category_id} = news;
    return (
        <>
        <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
          <Link to={`/category/${category_id}`}><Button variant="danger">Read All news of this category</Button></Link>
        </Card.Body>
      </Card>

      <EditorInsights/>
      </>
    );
};

export default News;