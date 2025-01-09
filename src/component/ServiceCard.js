import React from 'react'
import "./ServiceCard.css"
import Header from './Header'
import Footer from './Footer'
function ServiceCard() {
  return (
    <>
<Header></Header>

<div class="row d-flex justify-content-center mx-2 my-2">
  <div className='col-lg-3 col-md-5 col-sm-8'>
    <div class="card mx-1 shadow">
      <img src="./images/Serviceimg4.png" class="card-img-top" alt="..."/>
      <div class="card-body">
      <p class="card-title">RESUME DISPLAY</p>
      <h6>Increase your Profile Visibility to recruiters upto 3 times.</h6>
      <p class="card-text">Get a Featured Profile, Stand out and get noticed in recruiter eyes.</p>
    </div>
    <div class="card-footer" style={{display: "flex", justifyContent:"space-between"}}>
     <div>
     <small class="text-body-secondary">starts from</small>
     <h6>1260 for 3 months</h6>
     </div>

     <div className='btn 'style={{alignContent: "center" , color: "#42a7f5"}}>Know More</div>

    </div>
  </div>
  </div>
  <div className='col-lg-3 col-md-5 col-sm-8'>
    <div class="card mx-1 shadow">
      <img src="./images/Serviceimg5.png" class="card-img-top" alt="..." style={{paddingTop: "25px"}}/>
      <div class="card-body">
      <p class="card-title">PRIORITY APPLICANT</p>
      <h6>Be a Priority Applicant & increase your chance of getting a call.</h6>
      <p class="card-text">Be the first one to apply and catch recruiter attention</p>
    </div>
    <div class="card-footer" style={{display: "flex", justifyContent:"space-between"}}>
     <div>
     <small class="text-body-secondary">starts from</small>
     <h6>1260 for 3 months</h6>
     </div>

     <div className='btn 'style={{alignContent: "center" , color: "#42a7f5"}}>Know More</div>


    </div>
    </div>
    </div>
    <div className='col-lg-3 col-md-5 col-sm-8'>
    <div class="card mx-1 shadow">
      <img src="./images/Serviceimg6.png" class="card-img-top" alt="..."  style={{paddingTop: "32px"}}/>
      <div class="card-body">
      <p class="card-title">JOB SEARCH BOOSTER</p>
      <h6>Boost your job search with referrals</h6>
      <p class="card-text">Take help from over 20,000 seniors in top companies like TCS, HCL, Accenture etc.</p>
    </div>
    <div class="card-footer" style={{display: "flex", justifyContent:"space-between"}}>
     <div>
     <small class="text-body-secondary">starts from</small>
     <h6>1260 for 3 months</h6>
     </div>

     <div className='btn 'style={{alignContent: "center" , color: "#42a7f5"}}>Know More</div>

    

    </div>
    </div>
    </div>
  </div>


<div className='row d-flex justify-content-center my-4'>
<div class="col-12 border mx-3 shadow-sm"  style ={{width: "900px",   margin: "0px"}}>
  <div class="row g-0" style={{margin: "40px"}}>
    <div class="col-md-4">
      <img src="./images/Serviceimg.png" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body" style={{}}>
        <h3 class="card-title">Subscribe to our Monthly Job Search Plan</h3>
      
       
        <p class="card-text"><small class="text-body-secondary">KEY BENEFITS</small></p>

        <ul style={{listStyle:'none'}}>
          <li>Rank higher in Recruiter Searches</li>
          <li>Priority Access to Jobs</li>
          <li>Send message to Recruiter anytime</li>
        </ul>


        <div class="card-footer" style={{display: "flex", justifyContent:"space-between"}}>
     <div>
     <small class="text-body-secondary">subscription starts from</small>
     <h5>1566 for 3 months</h5>
     </div>
      
      <div className=''>
      <button type="button" class="btn btn-outline-primary">KNOW MORE</button>
      </div>
    </div>


      </div>
    </div>
  </div>
</div>

</div>

{/** */}
    <div className='row d-flex justify-content-center mx-2 my-5'>

    <div class="col-lg-3 col-md-5 col-sm-8">
  <div class="card shadow mx-1">
    <img src="./images/Serviceimg1.png" width="160" class="card-img-top" alt=""  style={{marginTop: "30px", height: "150px"}}/>
    <div class="card-body">
      <small class="card-title">JOBS FOR YOU</small>
      <h6>Stand out as an Early Applicant with instant access to jobs.</h6>
      <p class="card-text">Our experts will  understand your job preference & set alerts.Instant job on SMS.</p>
    </div>
    <div class="card-footer" style={{display: "flex", justifyContent:"space-between"}}>
     <div>
     <small class="text-body-secondary">subscription</small>
     <h6>1566 for 3 months</h6>
     </div>
      
     

     <div className='btn'style={{alignContent: "center" , color: "#42a7f5"}}>Know More</div>
    </div>
  </div>
</div>
<div className='col-lg-3 col-md-5 col-sm-8'>
  <div class="card shadow mx-1">
    <img src="./images/Serviceimg2.png" width="160" class="card-img-top" alt="..." style={{marginTop: "30px", height: "150px"}}/>
    <div class="card-body">
      <small class="card-title">RECRUITER CONNECTION</small>
      <h6>Send personalized message to recruiters</h6>
      <p class="card-text">Search from a database of 1.6 Lakh recruiters and share your Naukri profile with recruiter</p>
    </div>
    <div class="card-footer" style={{display: "flex", justifyContent:"space-between"}}>
     <div> 
        <small class="text-body-secondary">subscription </small>
        <h6>1566 for 3 months</h6>
     </div>

     <div className='btn'style={{alignContent: "center" , color: "#42a7f5" }}>Know More</div>

    </div>
  </div>
</div>

<div className='col-lg-3 col-md-5 col-sm-8'>
  <div class="card shadow mx-1">
    <img src="./images/Serviceimg3.png" width="160" class="card-img-top" alt="..." style={{marginTop: "30px", height: "150px"}}/>
    <div class="card-body">
      <p class="card-title">RESUME CRITIQUE</p>
      <h6>Get your resume reviewed and improve your job application</h6>
      <p class="card-text">Our experts will analyze your resume and send a detailed report with the recruiters to analyze</p>
    </div>
    <div class="card-footer" style={{display: "flex", justifyContent:"space-between"}}>
     <div>
     <small class="text-body-secondary">starts from</small>
     <h6>1260 for 3 months</h6>
     </div>

     <div className='btn 'style={{alignContent: "center" , color: "#42a7f5"}}>Know More</div>

    </div>
  </div>
</div>
    </div>

<Footer></Footer>
    </>
  )
}

export default ServiceCard