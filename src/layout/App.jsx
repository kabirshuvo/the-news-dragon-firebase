import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from 'react-router-dom';
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import LeftNavBar from '../pages/Shared/LeftNavBar/LeftNavBar';
import RightNavBar from '../pages/Shared/RightNavBar/RightNavBar';
import TopNavBar from '../pages/Shared/TopNavBar/TopNavBar';

function App() {

  return (
    <div className="App">
     <Header></Header>
     <TopNavBar></TopNavBar>

    <Container>
     <Row>
        <Col lg={3}>

            <LeftNavBar></LeftNavBar>

        </Col>
        <Col lg={6}>
          
          <Outlet></Outlet>
          
        </Col>
        <Col lg={3}>

            <RightNavBar></RightNavBar>

        </Col>
      </Row>
    </Container>

     <Footer></Footer>
    </div>
  )
}

export default App;
