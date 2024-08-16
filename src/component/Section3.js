import React from "react";

const a = {
    border : 1,
    borderStyle : "solid",
    borderRadius : 20,
    textDecoration : "none",
    padding : 3,
    display: "inline-block"
}

function Section3(){
    const arr = [
        {
            name :"Microsoft",
            total : +1.2,
            src : "./images/images.png"

    },{
        name : "Google",
        total : +1.9,
        src : "./images/download (4).png"

    },{
        name :"Meta",
        total : +1.3,
        src : "./images/download (6).png"
    },
    {
        name :"Flipkart",
        total : +1.8,
        src : "./images/download (10).png"
    },
    {
        name :"intel",
        total : +1.8,
        src : "./images/download (9).png"
    },
    {
        name :"Amazon",
        total : +1.8,
        src : "./images/download (3).png"
    },
    {
        name :"Cisco",
        total : +1.8,
        src : "./images/images11.jpeg"
    },{
        name : "Facebook",
        total : +1.7,
        src : "./images/download (5).png"
    },
];
    return <React.Fragment>
      <h2 className="mt-5" style={{fontWeight : 700}}>Top Companies Hiring Now</h2>
        <div className="row d-flex justify-content-center" style={{marginLeft:100, marginRight:120}}>
            { arr.map((company)=>
            <div className="col-lg-3 col-md-5 col-sm-12">
            <div className="card shadow-sm" style={{width: 240}}>
                <div className="card-body">
                    <p key={company.id}><b>{company.name}</b></p>
                    <p key={company.id}>{company.total}+ are currently hiring  </p>
                    <img key={company.id} src={`${company.src}`} width="90" className="p-2 "></img>
                    </div>
            </div>
            </div>
            )}
            </div>
    </React.Fragment>
}
export default Section3;