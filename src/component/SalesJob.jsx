import React from "react";
import Card from 'react-bootstrap/Card';
import Header from "./Header";
import Footer from "./Footer";

function Sales
() {
    return ( 
        <React.Fragment>
            <Header></Header>
                <div className="container p-2 mt-5" style={{background:"#b2dbed", borderRadius:22}} >
       <div class="row mx-auto">
        {/* 1 */}
        <div className="col-md-3 col-lg-2 col-sm-4" style={{marginLeft:18,}}>
          <div class="card" style={{ width: '12rem'}}>
      <Card.Body>
        <Card.Title><b>Sales Executive</b></Card.Title>
        <Card.Text>
          <p style={{color:"slateblue"}}> 1.9k+ Companies </p>
        </Card.Text>
      </Card.Body>
      </div>
      </div>
     {/* 2 */}
        <div className="col-lg-2 col-md-3 col-sm-4" style={{marginLeft:25}}>
          <div class="card" style={{ width: '12rem'}}>
      <Card.Body>
        <Card.Title><b>Sales Assistance</b></Card.Title>
        <Card.Text>
            <p style={{color:"slateblue"}}> 951 Companies </p> 
        </Card.Text>
      </Card.Body>
      </div>
      </div>
      {/* 3 */}
        <div className="col-lg-2 col-md-3 col-sm-4" style={{marginLeft:25}}>
        <div class="card" style={{ width: '12rem'}}>

      <Card.Body>
        <Card.Title><b>Accountant</b></Card.Title>
        <Card.Text>
           <p style={{color:"slateblue"}}> 346 Companies </p>
        </Card.Text>
      </Card.Body>
      </div>
      </div>
       {/* 4 */}
        <div className="col-lg-2 col-md-3 col-sm-4" style={{marginLeft:25}}>
        <div class="card" style={{ width: '12rem'}}>

      <Card.Body>
        <Card.Title><b>Sales Manager</b></Card.Title>
        <Card.Text>
              <p style={{color:"slateblue"}}>98 Companies </p>
        </Card.Text>
      </Card.Body>
      </div>
      </div>
          {/* 5 */}
        <div className="col-lg-2 col-md-3 col-sm-4" style={{marginLeft:30}}>
        <div class="card" style={{ width: '12rem'}}>

      <Card.Body>
        <Card.Title><b>Sales Executive</b></Card.Title>
        <Card.Text>
              <p style={{color:"slateblue"}}>106 Companies </p>
        </Card.Text>
      </Card.Body>
      </div>
      </div>
      </div>
      </div>

      {/** */}
      


<div className='card-section m-5'>
<div className="card mx-2 shadow-sm">
    
  <div class="card-body">
  <div className='header'>
  <img src='./images/logo1.png'/>
   <div className='header-title'>
   <h5 class="card-title ">Sales-Manager</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Comtug -25 Application</h6>
   </div>
  </div>
    <div className='groupbtn'>
    <button type="button" className="btn-1">Entry Level</button>
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

<div className="card mx-2 shadow-sm">
    
  <div class="card-body">
  <div className='header'>
  <img src='./images/logo2.png'/>
   <div className='header-title'>
   <h5 class="card-title ">Sales-Executive</h5>
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




<div className="card mx-2 shadow-sm">
    
  <div class="card-body">
  <div className='header'>
  <img src='./images/logo6.png'/>
   <div className='header-title'>
   <h5 class="card-title ">Product Manager</h5>
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






<div className="card mx-2 shadow-sm">
    
  <div class="card-body">
  <div className='header'>
  <img src='./images/logo7.jpg'/>
   <div className='header-title'>
   <h5 class="card-title ">Systems Analyst</h5>
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



<div className="card mx-2 shadow-sm">
    
  <div class="card-body">
  <div className='header'>
  <img src='./images/logo8.png'/>
   <div className='header-title'>
   <h5 class="card-title ">Sales Analyst</h5>
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





<div className="card mx-2 shadow-sm">
    
  <div class="card-body">
  <div className='header'>
  <img src='./images/logo14.png'/>
   <div className='header-title'>
   <h5 class="card-title ">Sales-Manager</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">HubSpot -13 Application</h6>
   </div>
  </div>
  <div className='groupbtn'>
    <button type="button" className="btn-1  ">Entry Level</button>
<button type="button" className="btn-2">Full-Time</button>
<button type="button" className="btn-3">Part-Time</button>
    </div>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  
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

export default Sales
;