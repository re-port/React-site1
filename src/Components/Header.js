import React, {Component} from 'react'
import {
  Navbar,
  Nav,
  FormControl,
  Container,
  Form,
  Button } from 'react-bootstrap'
import logo from './logo192.png'

class Header extends Component {
  render(){
    return (
     <>
      <Navbar fixed="top" collapseOnSelect expend="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" >
            <img
              src={logo}
              height="30"
              width="30"
              className="d-inline-block align-top"
              ail="Logo"
            /> React site
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsiv-navbar-nav" />
          <Navbar.Collapse id="responsiv-navbar-nav">
            <Nav className="mr-auto">
               <Nav.Link href="/"> Home </Nav.Link>
               <Nav.Link href="/about"> About us </Nav.Link>
               <Nav.Link href="/contacts"> Contacts </Nav.Link>
               <Nav.Link href="/blog"> Blog </Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     </>
   );
  }
}

export default Header;
