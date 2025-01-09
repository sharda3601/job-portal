import React from "react";


function Footer(){
    return <React.Fragment>
        <div className="row py-5 bg-body-tertiary shadow">
            <div className="col-sm-12 col-md-12 col-lg-2 mb-5">
            <div>
            <img src="images/js.png" alt="logo" width={60} className="rounded-circle d-block mx-auto"></img>
                    <p><b>Connect with us</b></p>
                    <i className="bi bi-facebook p-2 text-primary"></i>
                    <i className="bi bi-instagram p-2 text-danger"></i>
                    <i className="bi bi-twitter p-2 text-info"></i>
                    <i className="bi bi-linkedin p-2 text-primary"></i>

                </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-2">
                <ul className="text-center" style={{listStyleType:"none"}}>
                    <li className="py-2"><a href="About" style={{textDecoration : "none"}}>About Us</a></li>
                    <li className="py-2"><a href="Home" style={{textDecoration : "none"}}> Home</a></li>
                    <li className="py-2"><a href="Employer" style={{textDecoration : "none"}}>Employer home</a></li>
                    <li className="py-2"><a href="Sitemap" style={{textDecoration : "none"}}>Sitemap</a></li>
                    <li className="py-2"><a href="Credits" style={{textDecoration : "none"}}>Credits</a></li>
                </ul>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-2">
            <ul className="text-center" style={{listStyleType:"none"}}>
                    <li className="py-2"><a href="ContactForm" style={{textDecoration : "none"}}>Help Center</a></li>
                    <li className="py-2"><a href="Notices" style={{textDecoration : "none"}}> Notices</a></li>
                    <li className="py-2"><a href="Report" style={{textDecoration : "none"}}>Report issue</a></li>
                </ul>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-2">
            <ul className="text-center" style={{listStyleType:"none"}}>
                    <li className="py-2"><a href="Policy" style={{textDecoration : "none"}}>Privacy policy</a></li>
                    <li className="py-2"><a href="Terms" style={{textDecoration : "none"}}> Terms & conditions</a></li>
                    <li className="py-2"><a href="Fraud" style={{textDecoration : "none"}}>Fraud alert</a></li>
                    <li className="py-2"><a href="Safety" style={{textDecoration : "none"}}>Trust & safety</a></li>
                </ul>
            </div>
            <div className="col-sm-12 col-lg-4 col-md-12">
                <div className="border p-3 rounded me-3">
                    <h6>Apply On The Go</h6>
                    <p>Get real-time job updates on the App</p>
                    <div className="d-flex">
                    <img src="./images/android-app_v1 (1).png" alt="" className="me-2"></img>
                    <img src="./images/ios-app_v1.png" alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
}
export default Footer;