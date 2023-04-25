import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from 'react-router-dom';
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import RightNavBar from '../pages/Shared/RightNavBar/RightNavBar';

const NewsLayout = () => {
    return (
        <div>
            
     <Header></Header>

    <Container>
     <Row>
       
        <Col lg={9}>
          
          <Outlet></Outlet>
          
        </Col>
        <Col lg={3}>

            <RightNavBar></RightNavBar>

        </Col>
      </Row>
    </Container>

     <Footer></Footer>
   
        </div>
    );
};

export default NewsLayout;