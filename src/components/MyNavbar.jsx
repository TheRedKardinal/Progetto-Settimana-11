import { Navbar, Container, Nav } from "react-bootstrap";

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container fluid>
        <Navbar.Brand href="#">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="header-navbar" />
        <Navbar.Collapse id="header-navbar">
          <Nav className="ms-auto me-5 d-flex justify-content-between gap-5">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Novità</Nav.Link>
            <Nav.Link href="#">Radio</Nav.Link>
            <Nav.Link href="#">La tua libreria</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
