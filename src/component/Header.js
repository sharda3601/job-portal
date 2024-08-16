import React from "react";


function Header(){
    return <div>
        {/* navbar */}
    <nav className="navbar navbar-expand-lg bg-body-light shadow-sm">
  <div className="container-fluid ms-5 me-5">
    <a className="navbar-brand" href="#">
      <img src="images/js.png" alt="logo" width={50} className="rounded-circle"></img>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse flex-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">   
        <li className="nav-item p-2">
          <a href="#" className="nav-link" data-bs-toggle="dropdown" style={{position:"relative"}}>Job</a>
          <div className="dropdown text-capitalize">
          <ul className="dropdown-menu collapse" id="job" style={{position:"absolute"}}>
          <li className="dropdown-item"><a href="FresherJob" style={{textDecoration:"none"}} className="text-dark">fresher jobs</a></li>
            <li className="dropdown-item"><a href="SalesJob" style={{textDecoration:"none"}} className="text-dark">sales jobs</a></li>
            <li className="dropdown-item"><a href="RemoteJob" style={{textDecoration:"none"}} className="text-dark">remote jobs</a></li>
            <li className="dropdown-item"><a href="ITJob" style={{textDecoration:"none"}} className="text-dark">it jobs</a></li>
          </ul>
          </div>
        </li>
        <li className="nav-item p-2">
          <a href="#" className="nav-link p-2" data-bs-toggle="dropdown" aria-disabled="true">Companies</a>
          <div className="dropdown text-capitalize">
          <ul className="dropdown-menu collapse" id="job" style={{position:"absolute"}}>
            <li className="dropdown-item"><a href="TopCompanies" style={{textDecoration:"none"}} className="text-dark">Top Companies</a></li>
            <li className="dropdown-item"><a href="ITCompanies" style={{textDecoration:"none"}} className="text-dark">IT companies</a></li>
            <li className="dropdown-item"><a href="MNCCompanies" style={{textDecoration:"none"}} className="text-dark">MNC companies</a></li>
            <li className="dropdown-item"><a href="ProductBasedCompanies" style={{textDecoration:"none"}} className="text-dark">Product Based companies</a></li>

          </ul>
          </div>
        </li>
        <li className="nav-item p-2">
          <a href="Services"className="nav-link" aria-disabled="true" data-bs-toggle="dropdown">Services</a>
          <div className="dropdown text-capitalize">
          <ul className="dropdown-menu" style={{position:"absolute"}}>
            <li className="dropdown-item"><a href="ServiceCard" style={{textDecoration:"none"}} className="text-dark">priority applicant</a></li>
            <li className="dropdown-item"><a href="ContactForm" style={{textDecoration:"none"}} className="text-dark">contact us</a></li>
          </ul>
          </div>
        </li>
      </ul>
      <form className="flex-collapse text-center" role="search">
        <a href="Login" className="btn btn-outline-info px-4" type="submit" style={{borderRadius:40}}><b>Login</b></a>
        <a href="Jobseeker" className="btn btn-danger mx-3 me-5 px-4" type="submit" style={{borderRadius:40}}><b>Register</b></a>
      </form>
    </div>
  </div>
</nav>
    </div>
}
export default Header;