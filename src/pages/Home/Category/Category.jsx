import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Category = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData();
    return (
        <div>
            <h2>This Is my category {categoryNews.length}</h2>
        </div>
    );
};

export default Category;