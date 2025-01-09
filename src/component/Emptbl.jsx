import React from "react";
import Admin from "./Admin";
import AdminNav from "./AdminNav";

function Emptbl(){
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
        c_name : "Tata Consultancy Services",
        owner_name : "Ratan Tata",
        email :"ratan@gmail.com",
        status : "active",
        reg_date : '7-8-2021'
    },{
        id : 2,
        c_name : "Infosys",
        owner_name : "Narayan murti",
        email :"murti@gmail.com",
        status : "active",
        reg_date : '7-7-2022'
    },{
        id : 3,
        c_name : "Accenture",
        owner_name : "clarence Delany",
        email :"clarence@gmail.com",
        status : "active",
        reg_date : '17-8-2023'
    },{
        id : 4,
        c_name : "Cognizant",
        owner_name : "Kumar Mahadeva",
        email :"kumar@gmail.com",
        status : "active",
        reg_date : '17-8-2023'
    }
]
    return <React.Fragment>
        <div className="row bg-body-tertiary">
        <div className="col-12">
    <AdminNav></AdminNav>
    </div>
    <Admin></Admin>
        
        <div className="col">
    <h2 className="mt-5 text-white" style={color}>Employer List</h2>
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
                    <th>Company Name</th> 
                    <th>Concern Person</th>
                    <th>Email</th>  
                     <th>Status</th>
                     <th>Registration Date</th>
                     <th>Action</th>
                </tr>
                </thead>
                <tbody>
                { company.map((x) =>
                <tr key={x.key}>
                         <td>{x.id}</td>
                         <td>{x.c_name}</td>
                         <td>{x.owner_name}</td>
                         <td>{x.email}</td>
                         <td>{x.status}</td>
                         <td>{x.reg_date}</td>
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
export default Emptbl;