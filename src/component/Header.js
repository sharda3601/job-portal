import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return <div>
    <nav className="navbar navbar-expand-lg bg-body-light shadow-sm">
  <div className="container-fluid ms-5 me-5">
    <Link to="" className="navbar-brand">
    <img src="images/js.png" alt="logo" width={50} className="rounded-circle" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse flex-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">   
        <li className="nav-item p-2">
          <Link to="#" className="nav-link" data-bs-toggle="dropdown" style={{position:"relative"}}>Job</Link>
          <div className="dropdown text-capitalize">
          <ul className="dropdown-menu collapse" id="job" style={{position:"absolute"}}>
          <li className="dropdown-item"><Link to="/fresherJob" style={{textDecoration:"none"}} className="text-dark">fresher jobs</Link></li>
            <li className="dropdown-item"><Link to="/salesJob" style={{textDecoration:"none"}} className="text-dark">sales jobs</Link></li>
            <li className="dropdown-item"><Link to="/RemoteJob" style={{textDecoration:"none"}} className="text-dark">remote jobs</Link></li>
            <li className="dropdown-item"><Link to="/ITJob" style={{textDecoration:"none"}} className="text-dark">it jobs</Link></li>
          </ul>
          </div>
        </li>
        <li className="nav-item p-2">
          <Link to="#" className="nav-link p-2" data-bs-toggle="dropdown" aria-disabled="true">Companies</Link>
          <div className="dropdown text-capitalize">
          <ul className="dropdown-menu collapse" id="job" style={{position:"absolute"}}>
            <li className="dropdown-item"><Link to="/TopCompanies" style={{textDecoration:"none"}} className="text-dark">Top Companies</Link></li>
            <li className="dropdown-item"><Link to="/ITCompanies" style={{textDecoration:"none"}} className="text-dark">IT companies</Link></li>
            <li className="dropdown-item"><Link to="/MNCCompanies" style={{textDecoration:"none"}} className="text-dark">MNC companies</Link></li>
            <li className="dropdown-item"><Link to="/ProductBasedCompanies" style={{textDecoration:"none"}} className="text-dark">Product Based companies</Link></li>

          </ul>
          </div>
        </li>
        <li className="nav-item p-2">
          <Link to="/services"className="nav-link" aria-disabled="true" data-bs-toggle="dropdown">Services</Link>
          <div className="dropdown text-capitalize">
          <ul className="dropdown-menu" style={{position:"absolute"}}>
            <li className="dropdown-item"><Link to="/serviceCard" style={{textDecoration:"none"}} className="text-dark">priority applicant</Link></li>
            <li className="dropdown-item"><Link to="/contactForm" style={{textDecoration:"none"}} className="text-dark">contact us</Link></li>
          </ul>
          </div>
        </li>
      </ul>
      <form className="flex-collapse text-center" role="search">
        <Link to="/login" className="btn btn-outline-info px-4" type="submit" style={{borderRadius:40}}><b>Login</b></Link>
        <Link to="/register" className="btn btn-danger mx-3 me-5 px-4" type="submit" style={{borderRadius:40}}><b>Register</b></Link>
      </form>
    </div>
  </div>
</nav>
    </div>
}
export default Header;