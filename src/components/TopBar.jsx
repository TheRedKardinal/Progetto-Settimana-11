import { Navbar, Container, Nav, Button } from "react-bootstrap";

function TopBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container fluid>
        <Navbar.Brand href="#" className="logo">
          CodeMusic <i className="bi bi-vinyl"></i>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="hamburger-navbar"
          aria-label="Menu di navigazione"
        />
        <Navbar.Collapse id="hamburger-navbar">
          <Nav className="ms-auto me-5 d-flex justify-content-between gap-4">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Novità</Nav.Link>
            <Nav.Link href="#">Radio</Nav.Link>
            <Nav.Link href="#">La tua libreria</Nav.Link>
          </Nav>
          <Nav className="d-flex gap-2">
            <Button>Registrati</Button>
            <Button>Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;
