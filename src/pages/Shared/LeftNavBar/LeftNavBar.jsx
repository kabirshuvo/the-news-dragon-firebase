import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNavBar = () => {

    const [categories, setCategories] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/categories`)
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h3>All Categories</h3>

       <div className='ps-4 py-2'>
       {
            categories.map(category => <h6 key={category.id}>

                <Link className='text-decoration-none'>{category.name}</Link>
            </h6>)
        }

       </div>
        </div>
    );
};

export default LeftNavBar;