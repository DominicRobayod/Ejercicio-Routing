import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/mascotas">
          Adóptame
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
