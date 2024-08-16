import React from "react";
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
                    <a href="Dashboard" className="nav-link" style={a}> 
                    <i class="bi bi-cup-hot-fill me-1"></i>
                    Dashboard</a>
                </li>
                <li className="nav-item">
                    <a href="CategoryJob" className="nav-link" style={a}>
                    <i class="bi bi-bookmarks me-1"></i>Job Categories</a>
                </li><li className="nav-item">
                    <a href="Emptbl" className="nav-link" style={a}>
                    <i class="bi bi-people-fill me-1"></i>List of Employers</a>
                </li><li className="nav-item">
                    <a href="Candidates" className="nav-link" style={a}>
                    <i class="bi bi-person-vcard me-1"></i>Reg Jobseekers</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link" style={a}>
                    <i class="bi bi-file-earmark-richtext-fill me-1"></i>Pages</a>
                </li><li className="nav-item">
                    <a href="#" className="nav-link" style={a}>
                    <i class="bi bi-file-bar-graph-fill me-1"></i>Reports</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link" style={a}>
                    <i class="bi bi-search me-1"></i>Search</a>
                </li>
                
            </ul>
        </div>
    </React.Fragment>
}

export default Admin;