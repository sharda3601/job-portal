import React from "react";


function Section4(){
    return <React.Fragment>
        <div className="row w-75 shadow-sm p-4 my-5 rounded mx-auto">
            <div className="col-sm-2">
                <img src="images/ff-services-ot (1).png" alt="img" width={100}></img>
            </div>
            <div className="col-sm">
                <h4 className="text-warning">Accelerate your job search with premium services
                </h4>
               <p> Services to help you get hired, faster: from preparing your CV, 
                getting recruiter attention,<br/> finding the right jobs, and more!
                <br></br></p>
                <a href="#" className="btn btn-outline-secondary me-2 mb-2" style={{borderRadius:20}}>Resume writing</a>
                <a href="ServiceCard" className="btn btn-outline-secondary me-2 mb-2" style={{borderRadius:20}}>Priority Applicant</a>
                <a href="#" className="btn btn-outline-secondary mb-2" style={{borderRadius:20}}>Resume Display</a>
            </div>
        </div>
    </React.Fragment>
}
export default Section4;