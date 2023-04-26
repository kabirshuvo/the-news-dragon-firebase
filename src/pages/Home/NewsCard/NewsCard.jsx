import moment from 'moment/moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    const {_id, title, details, image_url, author,} = news;

    return (
        <Card >
             
        <Card.Header className='d-flex align-items-center'>
          
            <Image style={{height: '3rem'}} src={author?.img} roundedCircle /> 
        
            <div className='d-flex flex-column ps-2 flex-grow-1'>
                <p className='mb-0'>{author?.name}</p>
                <p > {moment(author?.published_date).format('Do MMM YYYY')}</p>
            </div>
            <div>
              <FaBookmark></FaBookmark> <FaShareAlt></FaShareAlt>
              
            </div>
        
        </Card.Header>
        <Card.Img variant="top" src={image_url} />
        <Card.Header>{title}</Card.Header>
        
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {' '}
              {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)} ... <Link to={`/news/${_id}`}><>Read More</></Link></>}
              {' '}
            </p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </Card.Body>
        <Card.Footer>{title}</Card.Footer>
      </Card>
    );
};

export default NewsCard;

