import React from "react";
import Header from "./Header";
import Footer from "./Footer";


function Contactform() {
    return ( 
        <React.Fragment>
            <Header></Header>
            <div className="row">
           <form style={{width : 600}} className="p-4 m-3 border shadow-sm mx-auto text-danger">
           <h3><b>We will get in touch with you</b></h3>
            <div className="my-2">
                <input type="text" placeholder="Name" className="form-control"></input>
            </div>
            <div className="my-2">
                <input type="Email" placeholder="Email" className="form-control"></input>
            </div><div className="my-2">
                <input type="text" placeholder="Mobile" className="form-control"></input>
            </div><div className="my-2">
                <textarea type="text" placeholder="Message" className="form-control"></textarea>
            </div>
            <button className="btn btn-primary">Call Me Back</button>
           </form>
           </div>
           <Footer></Footer>
        </React.Fragment>
     );
}

export default Contactform;