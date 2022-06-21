import { useState, useEffect } from 'react';
import './header.css'

const Header = ({logarCliente, clienteLogado}) => {
    const [dropdown, setDropdown] = useState(false)    

    return(
    <header className="navbar navbar-light bg-light shadow-sm mb-4">
      <div className="container-fluid">
        <a className="navbar-brand" text="" href="#">
          <img src= "./img/u.png" alt="" width="70" height="70" className="d-inline-block align-text-center me-2"/>
          Useful
        </a>
      
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" onClick={()=> setDropdown(!dropdown)} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          {clienteLogado !== null ? clienteLogado.nome : 'Login'}
        </button>
        {dropdown &&
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div className="input-group mb-2">
            <div className="input-group-prepend">
            </div>
            <input onChange={e =>logarCliente(e.target.value)}type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
        </div>}
      </div>
  </div>
</header>
    )
}
export default Header