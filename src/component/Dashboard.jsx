import React from "react";
import Admin from "./Admin";
import AdminNav from "./AdminNav";
    const i = {
        fontSize : 30,
    }
    const color1 = {
        backgroundImage: 'linear-gradient(to bottom, rgba(170, 50, 89,0.9),rgba(170,40,70,0.2))',
    }
    const color2 = {
        backgroundImage: 'linear-gradient(to bottom, rgba(70, 150, 89,0.9),rgba(70,140,170,0.2))'
    }
    const color3 = {
        backgroundImage: 'linear-gradient(to bottom, rgba(70, 150, 189,0.9),rgba(70,40,70,0.2))'
    }
    const color4 = {
        backgroundImage: 'linear-gradient(to bottom, rgba(70, 50, 109,0.9),rgba(70,40,100,0.2))'
    }
    

function Dashboard(){
        return <React.Fragment>
                <div className="row">
                <AdminNav></AdminNav>
                <Admin></Admin>
            <div className="col-lg col-md-8 col-sm-7 bg-body-tertiary pb-5">
            <div className="row m-3 p-2">
            <div className="row">
        <div className="col-lg-5 col-md-5 p-5 m-2" style={color1}>
        <i className="bi bi-bookmarks" style={i}></i>
                <h6>Total Job Categories</h6>
                <span className="badge bg-secondary">5</span>
        </div>
        <div className="col-lg-5 col-md-5 p-5 m-2" style={color2}>
        <i className="bi bi-card-list" style={i}></i>
                <h6>Total Registered Jobs</h6>
                <span className="badge bg-secondary">8</span>

        </div>
    </div>
    <div className="row">
        <div className="col-lg-5 col-md-5 p-5 m-2" style={color3}>
        <i className="bi bi-people-fill" style={i}></i>
                <h6>Total Registerd Candidates</h6>
                <span className="badge bg-secondary">10</span>

        </div>
        <div className="col-lg-5 col-md-5 p-5 m-2" style={color4}>
        <i className="bi bi-building" style={i}></i>
                <h6>Total Registerd Companies</h6>
                <span className="badge bg-secondary">15</span>

        </div>
    </div>
            </div>
            </div>
            </div>
        </React.Fragment>
}
export default Dashboard;