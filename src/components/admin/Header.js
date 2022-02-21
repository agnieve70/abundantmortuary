import React from "react";
import "./Header.css";
import abundantImage from "./images/logo.jpg";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { USER_TOKEN } from "../../constants/tokenConstant";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/userActions";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <div>
      <div className="headercontact container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 ">
            <img className="img-fluid" src={abundantImage} alt="img" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 header-detail ">
            <div className="abundant-headerdetails">
              <p className="">T: (0963)-576-2781 | F (0963)-576-2781</p>
              <p className="nopadding">Office Hours | 8:30am - 5:00pm | M-F</p>
              <p className="">Weekend services may also be arranged.</p>
            </div>
          </div>
        </div>
      </div>

      <Navbar className="nopadding ">
        <Container>
          {/* <LinkContainer to={USER_TOKEN ? "/admin" : "/"}>
            <Navbar.Brand href="#home">Abundant Mortuary</Navbar.Brand>
          </LinkContainer> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <div className="li-item">
                <LinkContainer to="/profiling">
                  <Nav.Link href="">PROFILING</Nav.Link>
                </LinkContainer>
              </div>
              <div className="li-item">
                <LinkContainer to="/agent">
                  <Nav.Link href="">AGENT</Nav.Link>
                </LinkContainer>
              </div>
              <div className="li-item">
                <LinkContainer to="/collector">
                  <Nav.Link href="#link">COLLECTOR</Nav.Link>
                </LinkContainer>
              </div>
              <div className="li-item">
                <LinkContainer to="/collection">
                  <Nav.Link href="#link">COLLECTION</Nav.Link>
                </LinkContainer>
              </div>
              <div className="li-item">
                {" "}
                <LinkContainer to="/report">
                  <Nav.Link href="#link">REPORTS</Nav.Link>
                </LinkContainer>
              </div>
              <div className="li-item">
                {" "}
                <LinkContainer to="/register">
                  <Nav.Link href="#link">USER ROLE</Nav.Link>
                </LinkContainer>
              </div>
              <div className="li-item">
                {" "}
                <Nav.Link href="#link" onClick={() => logoutHandler()}>
                  LOGOUT
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
