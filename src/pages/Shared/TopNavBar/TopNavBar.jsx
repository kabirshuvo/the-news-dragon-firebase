import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
const TopNavBar = () => {

    const {user} = useContext(AuthContext);
    const userDispName = user.displayName;

    return (
        <Container>
           <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mx-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Link className="me-2 text-decoration-none text-success" to={"/"}>
                  <>Home</>
                </Link>
                <Link className="me-2 text-decoration-none text-success">About</Link>
                <Link className="me-2 text-decoration-none text-success">Carrer</Link>
              </Nav>

              <div className="text-center">
                {user && <FaUserCircle className="me-4"></FaUserCircle>}

                <Nav.Link className="me-4">{userDispName}</Nav.Link>
              </div>
              {user ? (
                <Button variant="outline-success">LogOut</Button>
              ) : (
                <Link to={"/login"}>
                  <Button variant="outline-success">Login</Button>
                </Link>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar> 
        </Container>
    );
};

export default TopNavBar;