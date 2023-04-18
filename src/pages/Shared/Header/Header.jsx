import moment from 'moment';
import React from 'react';
import { Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";


const Header = () => {
    return (
        <Container>
           <div className="text-center">
                <h3>The header Section</h3>
                <h3>Logo will be here/ or this is logo</h3>
                <img src="" alt="" />
                <p><small>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</small></p>
           </div>
           <div className='d-flex'>
                <a className='btn btn-danger px-4 py-2 ' href="#">Latest</a>
                <Marquee speed={200}>
  I can be a React component, multiple React components, or just some text.
</Marquee>
           </div>
        </Container>
    );
};

export default Header;