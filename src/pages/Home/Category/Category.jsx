import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const {id} = useParams();
    const categorisedNews = useLoaderData();
    return (
        <div>
           {id && <h2>This Category News {categorisedNews.length}</h2>}
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