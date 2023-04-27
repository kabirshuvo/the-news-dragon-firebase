import moment from "moment";
import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Marquee from "react-fast-marquee";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../providers/AuthProvider";
const Header = () => {

const {user} = useContext(AuthContext);

const userDispName = user.displayName;


  return (
    <Container className="my-4">
      <div className="text-center">
        <p>{userDispName}</p>
        <img src={logo} alt="The news Dragon Logo" />
        <p>
          <small>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</small>
        </p>
      </div>
      <div className="d-flex">
        <a className="btn btn-danger px-4 py-2 " href="#">
          Latest
        </a>
        <Marquee speed={200}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>

      <div>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mx-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link><Link  to={'/'}>Home</Link></Nav.Link>
                <Nav.Link href="#action2">About</Nav.Link>
                <Nav.Link href="#action3">Carrer</Nav.Link>
              </Nav>

              <div className="text-center">
              {user && <FaUserCircle className="me-4"></FaUserCircle>}

<Nav.Link className="me-4">{userDispName}</Nav.Link>
              </div>
              <Button variant="outline-success">Login</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </Container>
  );
};

export default Header;
