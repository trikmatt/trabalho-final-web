import { useState, useEffect } from 'react';
import './header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Button, Dropdown} from 'react-bootstrap';
import { Link } from "react-router-dom"


const Header = ({logarCliente, clienteLogado, carrinho, pedido}) => {

    const [username, setUsername] = useState()

    const [input, setInput] = useState(null)

    useEffect(()=>{
      if(!!clienteLogado) {
        setUsername(clienteLogado.nome)
      }
    },[clienteLogado])
  
    return(
      <Navbar bg="light" expand="lg">
      <Container fluid>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>               
               <DropdownButton id="dropdown-basic-button" title={!!username ? username : 'Login'} variant="success">
                  
                  <input onChange={e =>setInput(e.target.value)}type="text" placeholder="Usuário" aria-label="User" aria-describedby="basic-addon1"/>
                  <input onChange={e =>setInput(e.target.value)}type="text" placeholder="Usuário" aria-label="User" aria-describedby="basic-addon1"/>
                  <Button variant="primary" onClick={()=> {!!input && logarCliente(input)}}>Logar</Button>{''}
              </DropdownButton>
              <Link className='ms-2' to={'/carrinho'} state={[carrinho, pedido]}><a class="btn btn-secondary" href="#" role="button">Carrinho</a></Link>
          </Nav>
          <Navbar.Brand href="home">
          Useful 
        <img src= "./img/u.png" alt="" width="70" height="70" className="d-inline-block align-text-center m-2"/>
        </Navbar.Brand>
      </Container>
    </Navbar>
    )
}
export default Header



// <div class="dropdown show">
//   <button class="btn btn-secondary dropdown-toggle" onClick={()=> setDropdown(!dropdown)} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
//     {clienteLogado !== null ? clienteLogado.nome : 'Login'}
//   </button>
//   {dropdown &&
//   <div class="dropdown-menu show" aria-labelledby="dropdownMenuButton">
//     <div class="input-group mb-2">
//       <div class="input-group-prepend">
//       </div>
//       <input onChange={e =>logarCliente(e.target.value)}type="text" placeholder="Username" aria-label="User" aria-describedby="basic-addon1"/>
//     </div>
//   </div>}
// </div>
// </div>
// </header> */}
