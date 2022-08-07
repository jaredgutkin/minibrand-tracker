import { Link } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";
import { FaBug, FaLeaf, FaQuestionCircle, FaFish, FaHome} from 'react-icons/fa'

export default function NavbarMenu() {
    return (
      <Navbar bg="success" variant="dark" expand="sm" sticky="top">
        <Navbar.Brand as={Link} to="/">
          <FaLeaf /> Critter Tracker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-menu" />
        <Navbar.Collapse id="navbar-menu">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              <FaHome/> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/bug">
              <FaBug /> Mini Brands! Series 3
            </Nav.Link>
            <Nav.Link as={Link} to="/fish">
              <FaFish /> Fish
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              <FaQuestionCircle/> About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }