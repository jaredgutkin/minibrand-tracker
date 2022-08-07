import { Link } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";
import { FaBlogger, FaBolt, FaQuestionCircle, FaFish, FaHome} from 'react-icons/fa'

export default function NavbarMenu() {
    return (
      <Navbar bg="success" variant="dark" expand="sm" sticky="top">
        <Navbar.Brand as={Link} to="/">
          <FaBlogger /> Mini Brand Tracker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-menu" />
        <Navbar.Collapse id="navbar-menu">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              <FaHome/> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/mbs1">
              <FaBolt /> MB! Series 1
            </Nav.Link>
            <Nav.Link as={Link} to="/mbs2">
              <FaBolt /> MB! Series 2
            </Nav.Link>
            <Nav.Link as={Link} to="/mbs3">
              <FaBolt /> MB! Series 3
            </Nav.Link>
            <Nav.Link as={Link} to="/mbs4">
              <FaBolt /> MB! Series 4
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              <FaQuestionCircle/> About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }