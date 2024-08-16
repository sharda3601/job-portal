import React from "react";
import Admin from "./Admin";
import AdminNav from "./AdminNav";

function Candidates() {
    const color = {
        backgroundColor : "rgba(105, 44, 71, 0.9)"
    }
    const btn = {
        backgroundColor : "rgb(122, 0, 71)",
        color :"white"
    }
    const btn1 = {
        backgroundColor : "rgb(15, 44, 71)",
        color :"white"
    }
    const btn2 = {
        backgroundColor : "rgb(75, 109, 10)",
        color : "white"
    }
    
    const company = [{
        id : 1,
        Candidate_name : "rahul",
        email :"rahul@gmail.com",
        status : "active",
        reg_date : '7-8-2021'
    },{
        id : 2,
        Candidate_name : "deesha",
        email :"deesha@gmail.com",
        status : "active",
        reg_date : '7-8-2021'
    },{
        id : 3,
        Candidate_name : "meena",
        email :"meena@gmail.com",
        status : "active",
        reg_date : '7-8-2021'
    },{
        id : 4,
        Candidate_name : "aman",
        email :"aman@gmail.com",
        status : "active",
        reg_date : '7-8-2021'
    }
]
    return <React.Fragment>
        <div className="row bg-body-tertiary">
            <div className="col-lg-12">
            <AdminNav></AdminNav>
            </div>
        <Admin></Admin>
    <div className="col-lg-8">
    <h2 className="mt-5 text-white" style={color}>Registerd Candidates</h2>
    <div>
    <div className="d-flex justify-content-between m-1">
        <div>show <select>
        <option>8</option>
            <option>10</option>
        </select> entries</div>
        <input type="search" placeholder="search"></input>
        </div>
            <table className="table table-striped table-bordered table-hover m-1">
                <thead className="thead-light">
                <tr className="">
                    <th>Id</th>
                    <th>Concern Person</th>
                    <th>Email</th>  
                     <th>Status</th>
                     <th>Registration Date</th>
                     <th>Action</th>
                </tr>
                </thead>
                <tbody>
                { company.map((y) =>
                <tr key={y.id}>
                         <td>{y.id}</td>
                         <td>{y.Candidate_name}</td>
                         <td>{y.email}</td>
                         <td>{y.status}</td>
                         <td>{y.reg_date}</td>
                         <td>
                            <button className="btn btn-sm me-1 mb-2" style={btn}>View</button>
                            <button className="btn btn-sm me-1 mb-2" style={btn1}>Edit</button>
                            <button className="btn btn-sm mb-2" style={btn2}>Delete</button>
                         </td>

                </tr>
                )}
                </tbody>
            </table>
            </div>
        </div>
        </div>
    </React.Fragment>
}

export default Candidates;