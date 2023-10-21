import { Navbar, Container, Nav, NavbarBrand } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar fixed="top" variant="dark">
        <Container>
          <NavbarBrand href="/">MANZFILMS</NavbarBrand>
          <Nav>
            <Nav.Link href="#trendings">Trending</Nav.Link>
            <Nav.Link href="#superhero">Super Hero</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
