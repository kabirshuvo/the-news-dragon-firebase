import React from 'react';

const NewsCard = ({news}) => {
    const {_id, title, details, thumbnail_url, image_url} = news;

    return (
        <div>
            <p>{title}</p>
            <p>{details}</p>
        </div>
    );
};

export default NewsCard;

