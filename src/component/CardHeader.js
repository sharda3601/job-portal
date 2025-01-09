import React from "react";
import Card from 'react-bootstrap/Card';

function CardHeader() {
    return ( 
        <React.Fragment>
      <div className="container p-3" style={{background:"#b2dbed", borderRadius:22}} >
       <div class="row">
        {/* 1 */}
        <div className="col-md-3 col-sm-4 col-lg-2" style={{marginLeft:18,}}>
          <div class="card" style={{ width: '12rem'}}>
      <Card.Body>
        <Card.Title><b>IT Companies</b></Card.Title>
        <Card.Text>
          <p style={{color:"slateblue"}}> 1.9k+ Companies </p>
        </Card.Text>
      </Card.Body>
      </div>
      </div>
     {/* 2 */}
        <div className="col-md-3 col-sm-4 col-lg-2" style={{marginLeft:25}}>
          <div class="card" style={{ width: '12rem'}}>
      <Card.Body>
        <Card.Title><b>MNCs</b></Card.Title>
        <Card.Text>
            <p style={{color:"slateblue"}}> 951 Companies </p> 
        </Card.Text>
      </Card.Body>
      </div>
      </div>
      {/* 3 */}
        <div className="col-md-3 col-sm-4 col-lg-2" style={{marginLeft:25}}>
        <div class="card" style={{ width: '12rem'}}>

      <Card.Body>
        <Card.Title><b>Product</b></Card.Title>
        <Card.Text>
           <p style={{color:"slateblue"}}> 346 Companies </p>
        </Card.Text>
      </Card.Body>
      </div>
      </div>
       {/* 4 */}
        <div className="col-md-3 col-sm-4 col-lg-2" style={{marginLeft:25}}>
        <div class="card" style={{ width: '12rem'}}>

      <Card.Body>
        <Card.Title><b>Hospitality</b></Card.Title>
        <Card.Text>
              <p style={{color:"slateblue"}}>98 Companies </p>
        </Card.Text>
      </Card.Body>
      </div>
      </div>
          {/* 5 */}
        <div className="col-md-3 col-sm-4 col-lg-2" style={{marginLeft:30}}>
        <div class="card" style={{ width: '12rem'}}>

      <Card.Body>
        <Card.Title><b>Banking</b></Card.Title>
        <Card.Text>
              <p style={{color:"slateblue"}}>106 Companies </p>
        </Card.Text>
      </Card.Body>
      </div>
      </div>
      </div>
      </div>
        </React.Fragment>
     );
}

export default CardHeader;