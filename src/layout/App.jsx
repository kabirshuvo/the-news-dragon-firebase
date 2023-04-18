import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import LeftNavBar from '../pages/Shared/LeftNavBar/LeftNavBar';
import RightNavBar from '../pages/Shared/RightNavBar/RightNavBar';

function App() {

  return (
    <div className="App">
     <Header></Header>

    <Container>
     <Row>
        <Col lg={3}>

            <LeftNavBar></LeftNavBar>

        </Col>
        <Col lg={6}>Main Content Comming Soon</Col>
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
