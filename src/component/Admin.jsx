import React from "react";
import { Link } from "react-router-dom";
const a = {
    color : "white",
    textTransform : "capitalize",
    fontWeight : 400,
    textAlign:"left"
}
const btn = {
    color :"rgb(205, 104, 171)"
}

function Admin(){
    return <React.Fragment>
        <div className="col-lg-3 col-md-4 col-sm-5 bg-dark text-white p-4">
            <h4 style={btn}>Job Portal | Admin</h4>
            <hr></hr>
            <i className="bi bi-person-circle" style={{fontSize:40}}></i>
            <p>Admin</p>
            <hr></hr>
            <ul className="nav flex-column">
                <li className="nav-item nav-pills">
                    <Link to="/dashboard" className="nav-link" style={a}> 
                    <i class="bi bi-cup-hot-fill me-1"></i>
                    Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link to="/categoryJob" className="nav-link" style={a}>
                    <i class="bi bi-bookmarks me-1"></i>Job Categories</Link>
                </li><li className="nav-item">
                    <Link to="/emptbl" className="nav-link" style={a}>
                    <i class="bi bi-people-fill me-1"></i>List of Employers</Link>
                </li><li className="nav-item">
                    <Link to="/candidates" className="nav-link" style={a}>
                    <i class="bi bi-person-vcard me-1"></i>Reg Jobseekers</Link>
                </li>
                <li className="nav-item">
                    <Link to="#" className="nav-link" style={a}>
                    <i class="bi bi-file-earmark-richtext-fill me-1"></i>Pages</Link>
                </li><li className="nav-item">
                    <Link to="#" className="nav-link" style={a}>
                    <i class="bi bi-file-bar-graph-fill me-1"></i>Reports</Link>
                </li>
                <li className="nav-item">
                    <Link to="#" className="nav-link" style={a}>
                    <i class="bi bi-search me-1"></i>Search</Link>
                </li>
                
            </ul>
        </div>
    </React.Fragment>
}

export default Admin;