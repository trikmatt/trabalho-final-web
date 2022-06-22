import { useState, useEffect } from 'react';
import './header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';

const Header = ({logarCliente, clienteLogado}) => {

    const [username, setUsername] = useState(null)
  
    return(
      <Navbar bg="light" expand="lg">
      <Container fluid>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
               
               <DropdownButton id="dropdown-basic-button" title="Login" variant="success">
                  <input onChange={e =>logarCliente(e.target.value)}type="text" placeholder="Usuário" aria-label="User" aria-describedby="basic-addon1"/>
                  <input onChange={e =>logarCliente(e.target.value)}type="password" placeholder="Senha" aria-label="Senha" aria-describedby="basic-addon1"/>
                  <Button variant="primary" onClick={()=> {!!username && logarCliente(username)}}>Logar</Button>{' '}
                </DropdownButton>

          </Nav>
          <Navbar.Brand href="home">
          Useful  
        <img src= "./img/u.png" alt="" width="70" height="70" className="m-2" />
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
