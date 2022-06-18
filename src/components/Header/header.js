import React from 'react';
import u from './assets/u.png'
const Header = () => {
    return(
<nav className="navbar navbar-light bg-light shadow-sm mb-4">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={u} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
      Bootstrap
    </a>
  </div>
</nav>
    )
}
export default Header