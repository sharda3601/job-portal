import React from 'react';
import "./Jobseeker.css"

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
    <a href="Login" className='btn btn-sm btn-primary mx-2'>SIGN IN NOW</a>
</div>

</section>
</div>

<form action="Login" class="g-3 m-4 text-start form w-75 border shadow-sm p-4 mx-auto">
  <div className='row'>
  <div class="col-sm-12 col-md-6 col-lg-6 my-3">
    <label for="yourName" class="form-label text-left">Full Name :</label>
    <input type="text" class="form-control" id="yourName" placeholder='full name'/>
  </div>
  <div class="col-sm-12 col-md-6 col-lg-6 my-3">
    <label for="inputEmail4" class="form-label">Email :</label>
    <input type="email" class="form-control" id="inputEmail4"
    placeholder='cany21@js.com'/>
  </div>
  <div class="col-sm-12 col-md-6 col-lg-6 my-3">
    <label for="inputNumber" class="form-label">Contact No :</label>
    <input type="ph.no" class="form-control" id="inputNumber" placeholder="+911234567890"/>
  </div>
  <div class="col-sm-12 col-md-6 col-lg-6 my-3">
    <label for="inputPassword4" class="form-label">Password :</label>
    <input type="password" class="form-control" id="inputPassword4" placeholder="You@20133"/>
  </div>
  <div class="col-sm-12 col-md-6 col-lg-6 my-3">
    <label for="inputCity" class="form-label">Address</label>
    <textarea className='form-control'></textarea>
  </div>
  <div class="col-sm-12 col-md-6 col-lg-6 my-3">
    <label for="inputCity" class="form-label">Registration Date</label>
    <input type="date" class="form-control" id="inputPassword4"/>
  </div>
  
  <div class="col-sm-12 col-md-6 col-lg-6 my-3">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="p-3">
    <button type="submit" class="btn btn-primary d-block mx-auto" onClick={(ShowAlert)}>SIGN UP</button>
  </div>
  </div>
</form>

    </>
  )
}

export default Register;