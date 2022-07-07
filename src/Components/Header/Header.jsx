import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Toast } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.config";
import { ToastContainer, toast } from "react-toastify";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Rocky Accountant
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={NavLink} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
              {user ? (
                <Nav.Link
                  as={Button}
                  className="bg-white text-dark px-1 py-0 ms-2"
                  onClick={() => {
                    signOut(auth);
                    toast("User Logout");
                  }}
                >
                  Logout
                </Nav.Link>
              ) : (
                <Nav.Link as={NavLink} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
        <ToastContainer />
      </Navbar>
    </div>
  );
};

export default Header;
