import React from "react";
import Card from 'react-bootstrap/Card';

function CardHeaderJob() {
    return ( 
        <React.Fragment>
      <div className="container p-2 mt-5" style={{background:"#b2dbed", borderRadius:20}} >
       <div class="row">
        {/* 1 */}
        <div className="col-lg-2 col-md-3 col-sm-4" style={{marginLeft:18,}}>
          <div class="card" style={{ width: '12rem'}}>
      <Card.Body>
        <Card.Title><b>React App Developer</b></Card.Title>
        <Card.Text>
          <p style={{color:"slateblue"}}> 1.9k+ Companies </p>
        </Card.Text>
      </Card.Body>
      </div>
      </div>
     {/* 2 */}
        <div className="col-lg-2 col-md-3 col-sm-4" style={{marginLeft:25}}>
          <div class="card" style={{ width: '12rem'}}>
      <Card.Body>
        <Card.Title><b>Software Engineer</b></Card.Title>
        <Card.Text>
            <p style={{color:"slateblue"}}> 951 Companies </p> 
        </Card.Text>
      </Card.Body>
      </div>
      </div>
      {/* 3 */}
        <div className="col-lg-2 col-md-3 col-sm-4" style={{marginLeft:25}}>
        <div class="card" style={{ width: '12rem'}}>

      <Card.Body>
        <Card.Title><b>Game App Developer</b></Card.Title>
        <Card.Text>
           <p style={{color:"slateblue"}}> 346 Companies </p>
        </Card.Text>
      </Card.Body>
      </div>
      </div>
       {/* 4 */}
        <div className="col-md-3 col-lg-2 col-sm-4" style={{marginLeft:25}}>
        <div class="card" style={{ width: '12rem'}}>

      <Card.Body>
        <Card.Title><b>Automation Tester</b></Card.Title>
        <Card.Text>
              <p style={{color:"slateblue"}}>98 Companies </p>
        </Card.Text>
      </Card.Body>
      </div>
      </div>
          {/* 5 */}
        <div className="col-md-2" style={{marginLeft:30}}>
        <div class="card" style={{ width: '12rem'}}>

      <Card.Body>
        <Card.Title><b>Front End Developer</b></Card.Title>
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

export default CardHeaderJob;