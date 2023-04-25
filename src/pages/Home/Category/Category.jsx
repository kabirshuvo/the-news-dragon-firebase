import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const {id} = useParams();
    const categorisedNews = useLoaderData();
    return (
        <div>
            <h2>This Is my category {categorisedNews.length}</h2>
            {
                categorisedNews.map(news => <NewsCard 
                    key={news._id}
                    news={news}
                    ></NewsCard>)
            }
        </div>
    );
};

export default Category;