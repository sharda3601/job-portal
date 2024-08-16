import React from 'react';
import "./Jobcategary.css"
function JobForm() {


    const ShowAlert = () => {
        alert(" job Details Saved Succesfully!")
    }

  return (
    <>
<header className='head'>
    <h1>Job Categary</h1>
</header>

<form action="Home" class="row g-3 my-4 mx-auto p-3 text-start border" style={{width:600}}>
  <div class="col-md-11">
    <label for="yourName" class="form-label">Profile Name :</label>
    <input type="text" class="form-control" id="yourName" placeholder=' '/>
  </div>
  <div class="col-md-11">
    <label for="inputEmail4" class="form-label">Company Name :</label>
    <input type="text" class="form-control" id="inputEmail4"
    placeholder=''/>
  </div>
  <div class="col-md-11">
    <label for="inputNumber" class="form-label">Experience :</label>
    <input type="number" class="form-control" id="inputNumber" placeholder=""/>
  </div>
  <div class="col-md-11">
    <label for="inputPassword4" class="form-label">Location :</label>
    <select class="form-select" aria-label="Default select example">
  <option selected> select Location</option>
  <option value="1">Pune</option>
  <option value="2">Mumbai</option>
  <option value="3">Goa</option>
</select>
  </div>
  <div class="col-md-11">
    <label for="inputCity" class="form-label">Skills :</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary d-block mx-auto" onClick={ShowAlert}>Save</button>
  </div>
</form>
    </>
  )
}

export default JobForm;