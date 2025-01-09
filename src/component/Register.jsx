import React from 'react';
import "./Jobseeker.css"
import { Link } from 'react-router-dom';

function Register() {

const ShowAlert= () =>{
    alert("form registered Succesfully !");
    return <div className='alert alert-sucess'>
      <p>form registered Succesfully !</p>
      <button type='button' className='btn-close'></button>
    </div> 
}

  return (
    <>
<header className='head'>
    <h1>Jobseeker</h1>
</header>
<div className='info'>
<section className='info-card px-5 py-3'>
<div className='HP'>
    <h4>Have an Account?</h4>
    <p> if you don't have an account. fill the below form.</p>
</div>
<div className='HP-2'>
    <Link to="/login" className='btn btn-sm btn-primary mx-2'>SIGN IN NOW</Link>
</div>

</section>
</div>

<form action="Login" className="g-3 m-4 text-start form w-75 border shadow-sm p-4 mx-auto">
  <div className='row'>
  <div className="col-sm-12 col-md-6 col-lg-6 my-3">
    <label htmlFor="yourName" className="form-label text-left">Full Name :</label>
    <input type="text" className="form-control" id="yourName" placeholder='full name'/>
  </div>
  <div className="col-sm-12 col-md-6 col-lg-6 my-3">
    <label htmlFor="inputEmail4" className="form-label">Email :</label>
    <input type="email" className="form-control" id="inputEmail4"
    placeholder='cany21@js.com'/>
  </div>
  <div className="col-sm-12 col-md-6 col-lg-6 my-3">
    <label htmlFor="inputNumber" className="form-label">Contact No :</label>
    <input type="ph.no" className="form-control" id="inputNumber" placeholder="+911234567890"/>
  </div>
  <div className="col-sm-12 col-md-6 col-lg-6 my-3">
    <label htmlFor="inputPassword4" className="form-label">Password :</label>
    <input type="password" className="form-control" id="inputPassword4" placeholder="You@20133"/>
  </div>
  <div className="col-sm-12 col-md-6 col-lg-6 my-3">
    <label htmlFor="inputCity" className="form-label">Address</label>
    <textarea className='form-control'></textarea>
  </div>
  <div className="col-sm-12 col-md-6 col-lg-6 my-3">
    <label htmlFor="inputCity" className="form-label">Registration Date</label>
    <input type="date" className="form-control" id="date"/>
  </div>
  
  <div className="col-sm-12 col-md-6 col-lg-6 my-3">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="p-3">
    <button type="submit" className="btn btn-primary d-block mx-auto" onClick={(ShowAlert)}>SIGN UP</button>
  </div>
  </div>
</form>

    </>
  )
}

export default Register;