import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';


export default function NavBar() {
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get('token')) {
      setLoggedIn(true)
    }
    else {
      setLoggedIn(false)
    }
  }, [navigate])

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Posting app</Navbar.Brand>
          <Nav className="me-auto">
            {loggedIn? <Nav.Link href='/' onClick={() => {Cookies.remove('token')}}>Sign out</Nav.Link> : <Nav.Link href='/login'>Login</Nav.Link>}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
