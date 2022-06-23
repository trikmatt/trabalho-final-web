import { useState, useEffect } from 'react';
import './header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Button, Form } from 'react-bootstrap';
import { useNavigate , Link  } from 'react-router-dom'
import { render } from '@testing-library/react';

const Header = ({ logarCliente, clienteLogado, carrinho, pedido }) => {

  
  const [username, setUsername] = useState(null)
  const navigate = useNavigate();
  const [ativo , setAtivo] = useState()

  const handleCLick = (event) =>{ 
    console.log("click")
    setAtivo(true)
    navigate('/login')

  }

  const handleLogut = () =>{
    localStorage.setItem('logado' , false)
    setAtivo(false)
  }

  useEffect(() => {
    console.log("teste")
    localStorage.setItem('logado' , false)

  }, [])
  

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll>
            {!ativo? 
              <Button id="dropdown-basic-button" title="Login" variant="success"  onClick={handleCLick}>
                  login
              </Button > 
            :
              <Button id="dropdown-basic-button" title="Login" variant="danger"  onClick={handleLogut}>
                  logout
              </Button >
            }
            <Link to={'/carrinho'} state={[carrinho, pedido]}><a class="btn btn-primary m-2" href="#" role="button">Carrinho</a></Link>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar produtos..."
              className="me-2 ms-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Filtrar</Button>
          </Form>
        </Nav>
        <Navbar.Brand href="home">
          Useful
          <img src="./img/u.png" alt="" width="70" height="70" className="m-2" />
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}
export default Header
