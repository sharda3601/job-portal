import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CardHeaderJob from "./CardHeaderJob";
import './Cards.css';


function ITJob() {
    return ( 
        <React.Fragment>
            <Header></Header>
            <CardHeaderJob></CardHeaderJob>
            {/**job */}
            <div className='card-section m-5'>
<div className="card shadow-sm mx-2">
    
  <div class="card-body">
  <div className='header'>
  <img src='./images/logo1.png'/>
   <div className='header-title'>
   <h5 class="card-title ">Loan Officer</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Comtug -25 Application</h6>
   </div>
  </div>
  <div className='groupbtn'>
    <button type="button" className="btn-1  ">Entry Level</button>
<button type="button" className="btn-2">Full-Time</button>
<button type="button" className="btn-3">Part-Time</button>
    </div>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
    <hr></hr>
   <div className='footer'>
   <h4>$250/hr</h4>
   <button type="button" class="btn btn-primary">Apply Now</button>
   {/* <p>Posted 12 days ago</p> */}
   </div>
  </div>
</div>


{/*  <div className='apply-btn'>
    <button type="button" class="btn btn-primary">Primary</button>
    </div> */}


<div className="card shadow-sm mx-2">
    
  <div class="card-body">
  <div className='header'>
  <img src='./images/logo2.png'/>
   <div className='header-title'>
   <h5 class="card-title ">Credit Analyst</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Outsource -25 Application</h6>
   </div>
  </div>
  <div className='groupbtn'>
    <button type="button" className="btn-1  ">Entry Level</button>
<button type="button" className="btn-2">Full-Time</button>
<button type="button" className="btn-3">Part-Time</button>
    </div>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
    <hr></hr>
   <div className='footer'>
   <h4>$250/hr</h4>
   <button type="button" class="btn btn-primary">Apply Now</button>
   </div>
  </div>
</div>




<div className="card shadow-sm mx-2">
    
  <div class="card-body">
  <div className='header'>
  <img src='./images/logo6.png'/>
   <div className='header-title'>
   <h5 class="card-title ">Branch Manager</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">LOTECH -35 Application</h6>
   </div>
  </div>
  <div className='groupbtn'>
    <button type="button" className="btn-1  ">Entry Level</button>
<button type="button" className="btn-2">Full-Time</button>
<button type="button" className="btn-3">Part-Time</button>
    </div>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  
    <hr></hr>
   <div className='footer'>
   <h4>$250/hr</h4>
   <button type="button" class="btn btn-primary">Apply Now</button>
   </div>
  </div>
</div>






<div className="card shadow-sm mx-2">
    
  <div class="card-body">
  <div className='header'>
  <img src='./images/logo7.jpg'/>
   <div className='header-title'>
   <h5 class="card-title ">Auditor</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Scarlet -15 Application</h6>
   </div>
  </div>
  <div className='groupbtn'>
    <button type="button" className="btn-1  ">Entry Level</button>
<button type="button" className="btn-2">Full-Time</button>
<button type="button" className="btn-3">Part-Time</button>
    </div>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  
    <hr></hr>
   <div className='footer'>
   <h4>$250/hr</h4>
   <button type="button" class="btn btn-primary">Apply Now</button>
   </div>
  </div>
</div>



<div className="card shadow-sm mx-2">
    
  <div class="card-body">
  <div className='header'>
  <img src='./images/logo8.png'/>
   <div className='header-title'>
   <h5 class="card-title ">Investment banking
</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">TeamCode -10 Application</h6>
   </div>
  </div>
  <div className='groupbtn'>
    <button type="button" className="btn-1  ">Entry Level</button>
<button type="button" className="btn-2">Full-Time</button>
<button type="button" className="btn-3">Part-Time</button>
    </div>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  
    <hr></hr>
   <div className='footer'>
   <h4>$250/hr</h4>
   <button type="button" class="btn btn-primary">Apply Now</button>
   </div>
  </div>
</div>





<div className="card shadow-sm mx-2">
    
  <div class="card-body">
  <div className='header'>
  <img src='./images/logo14.png'/>
   <div className='header-title'>
   <h5 class="card-title ">Accountant</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">HubSpot -13 Application</h6>
   </div>
  </div>
  <div className='groupbtn'>
    <button type="button" className="btn-1  ">Entry Level</button>
<button type="button" className="btn-2">Full-Time</button>
<button type="button" className="btn-3">Part-Time</button>
    </div>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  
    <hr></hr>
   <div className='footer'>
   <h4>$250/hr</h4>
   <button type="button" class="btn btn-primary">Apply Now</button>
   </div>
  </div>
</div>







</div>
            <Footer></Footer>
        </React.Fragment>
     );
}

export default ITJob;