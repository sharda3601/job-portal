import React from 'react';
import "./Jobseeker.css"

function Jobseeker() {

const ShowAlert = () => {
    alert(" form registered Succesfully !")
}

  return (
    <>
<header className='head'>
    <h1>Registration Page</h1>
</header>
<div className='info'>
<section className='info-card'>

<div className='HP'>
    <h4>Have an Account?</h4>
    <p> if you don't have an account. fill the below form.</p>
</div>
<div className='HP-2'>
    <button >SIGN IN NOW</button>
</div>

</section>
</div>

<div className='main'>
<section className='form-1'>
<form action="Login" class="row g-3 m-4 text-start">
  <div class="col-md-6">
    <label for="yourName" class="form-label text-left">Full Name :</label>
    <input type="text" class="form-control" id="yourName" placeholder='full name'/>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email :</label>
    <input type="email" class="form-control" id="inputEmail4"
    placeholder='cany21@js.com'/>
  </div>
  <div class="col-6">
    <label for="inputNumber" class="form-label">Contact No :</label>
    <input type="ph.no" class="form-control" id="inputNumber" placeholder="+911234567890"/>
  </div>
  <div class="col-6">
    <label for="inputPassword4" class="form-label">Password :</label>
    <input type="password" class="form-control" id="inputPassword4" placeholder="You@20133"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">Date Of Birth</label>
    <input type="date" class="form-control" id="inputCity"/>
  </div>
  
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12 p-3">
    <button type="submit" class="btn btn-primary d-block mx-auto" onClick={ShowAlert}>SIGN UP</button>
  </div>
</form>

</section>
</div>
    </>
  )
}

export default Jobseeker