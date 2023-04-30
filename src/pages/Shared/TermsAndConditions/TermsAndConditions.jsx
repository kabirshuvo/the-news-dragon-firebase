import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <Container>
        <div>
            <h3>Terms And Conditions are Here</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatum quod, vero iusto praesentium ad exercitationem consequuntur reiciendis aperiam eius suscipit repudiandae aliquid autem corporis dolor reprehenderit, beatae illum deserunt!</p>
        </div>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </Container>
    );
};

export default TermsAndConditions;