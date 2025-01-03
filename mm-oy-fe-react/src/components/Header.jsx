import React from 'react'
import { IoMenu } from "react-icons/io5";

export const Header = () => {
  return (<>
  
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    
    <button type="button" class="btn">
    <IoMenu />
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        
      </ul>
      <div class="d-flex">
        <img src="https://via.placeholder.com/150" alt="logo" />
      </div>
      
    </div>
  </div>
</nav>


 
  </>)
}

export default Header