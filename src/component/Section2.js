import React from "react";

const a = {
    color : "black",
    textDecoration : "none",
    fontWeight : 500
}

function Section2(){
    return <React.Fragment>
        <div className="container my-5">
        <div className="row justify-content-center" style={{marginBottom :30}}>
            <div className="col-lg-2 col-md-3 col-sm-4 p-3 mb-3 py-4 border mx-1 rounded shadow-sm">    
            <i className="bi bi-house-door px-2" style={{fontSize: 20}}></i>
            <a href="#" style={a}>Remote</a>
            <b><i className="bi bi-chevron-right px-2"></i></b>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 mb-3 border p-3 py-4 mx-1 rounded shadow-sm">    
            <i className="bi bi-building px-2"  style={{fontSize: 20}}></i>
            <a href="#" style={a}>MNC</a>
            <b><i className="bi bi-chevron-right px-2"></i></b>

            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 mb-3 border p-3 py-4 rounded mx-1 shadow-sm">    
            <i className="bi bi-currency-rupee" style={{fontSize: 20}}></i>
            <a href="#" style={a}>Banking</a>
            <b><i className="bi bi-chevron-right px-2"></i></b>

            </div>
            <div className="col-lg-2 col-md-4 col-sm-5 mb-3 border p-3 rounded mx-1 shadow-sm">    
            <i className="bi bi-gear px-2"  style={{fontSize: 20}}></i>
            <a href="#" style={a}>Engineering</a>
            <b><i className="bi bi-chevron-right px-2"></i></b>

            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 mb-3 border p-3 rounded mx-1 shadow-sm">    
            <i className="bi bi-bar-chart px-2"  style={{fontSize: 20}}></i>
            <a href="#" style={a}>Internship</a>
            <b><i className="bi bi-chevron-right px-2"></i></b>
            </div>
           
            <div className="col-lg-2 col-md-3 col-sm-4 mb-3 border p-3 py-4 rounded mx-1 shadow-sm">    
            <i className="bi bi-person-square px-2" style={{fontSize: 20}}></i>
            <a href="#" style={a}>HR</a>
            <b><i className="bi bi-chevron-right px-2"></i></b>

            </div> <div className="col-lg-3 col-md-4 col-sm-5 mb-3 border p-3 py-4 rounded mx-1 shadow-sm">    
            <i className="bi bi-bar-chart-fill px-2"  style={{fontSize: 20}}></i>
            <a href="#" style={a}>Data Science</a>
            <b><i className="bi bi-chevron-right px-2"></i></b>

            </div> <div className="col-lg-2 col-md-3 col-sm-4 mb-3  border p-3 py-4 rounded mx-1 shadow-sm">    
            <i className="bi bi-mortarboard-fill px-2"  style={{fontSize: 20}}></i>
            <a href="#" style={a}>Fresher</a>
            <b><i className="bi bi-chevron-right px-2"></i></b>

            </div> <div className="col-lg-3 col-md-4 col-sm-6 mb-3 border p-3 py-4 rounded mx-1 shadow-sm">    
            <i className="bi bi-person px-2"  style={{fontSize: 20}}></i>
            <a href="#" style={a}>Project Manager</a>
            <b><i className="bi bi-chevron-right px-2"></i></b>

            </div>
            </div>
        </div>
    </React.Fragment>
}
export default Section2;