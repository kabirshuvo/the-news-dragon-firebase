import moment from "moment";
import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../providers/AuthProvider";
const Header = () => {
  const { user } = useContext(AuthContext);

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
        <Marquee className="text-success" speed={200}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. ...
        </Marquee>
       
      </div>

      
    </Container>
  );
};

export default Header;
