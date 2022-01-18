import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {USER_TOKEN} from '../../constants/tokenConstant';

function Header() {

    const logout = () => {
        alert("logout");
    }
    return (
         <Navbar bg="info" variant="dark" expand="lg" className="mb-5">
            <Container>
                <LinkContainer to={USER_TOKEN ? '/admin' : '/'}>
                    <Navbar.Brand href="#home">Abundant Mortuary</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to='/profiling'>
                        <Nav.Link href="">PROFILING</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/agent'>
                        <Nav.Link href="">AGENT</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/collector'>
                        <Nav.Link href="#link">COLLECTOR</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/collection'>
                        <Nav.Link href="#link">COLLECTION</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/report'>
                        <Nav.Link href="#link">REPORTS</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/register'>
                        <Nav.Link href="#link">USER ROLE</Nav.Link>
                    </LinkContainer>
                    <Nav.Link href="#link" onClick={()=> logout()}>LOGOUT</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    )
}

export default Header
