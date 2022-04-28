import React from 'react';
import './Navbar.css'

// Navbar
const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light nav-bg-color p-4">
  <div className="container-fluid">
    <a className="navbar-brand fw-bold" href="#">Laptop Bazaar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item d-flex">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
          <a className="nav-link active" aria-current="page" href="#">Leptop</a>
          <a className="nav-link active" aria-current="page" href="#">Contact</a>
          <a className="nav-link active" aria-current="page" href="#">About us</a>
        </li>
      </ul>
      <div className="d-flex">
         <input className='form-control me-2' type=" search" placeholder='Search' aria-label='Search' />
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </div>
    </div>
  </div>
</nav>
    </div>
  );
};

export default Navbar;