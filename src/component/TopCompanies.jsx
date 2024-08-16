import React from "react";
import Card from 'react-bootstrap/Card';

import CardHeader from "./CardHeader";
import Footer from "./Footer";
import Header from "./Header";

const   TopCompanies=()=>{
     return(
      <React.Fragment>
        <Header></Header>
        {/**card header */}
        <h2 className="mt-5 mb-4" style={{marginLeft:40}}> <b>Top companies actively hiring </b></h2>
        <CardHeader></CardHeader>


      <div className="mb-5">
        <h5 className="mt-3 text-center"> Showing 10 Companies </h5>
        <br></br>
        <div className="container p-3 " style={{borderRadius:15, width:'70%'}} >
       {/* 1 */}
       <div class="row d-flex d-sm-flex d-md-flex justify-content-center">
       <div className=" col-lg-5" style={{marginLeft:10}}>
          <div class="card shadow-sm" style={{ width: '23rem', padding:10}}>
      <Card.Body>
        <div style={{width:40, float:"inline-start"}}>
      <img src="./images/25796.gif" style={{width:70, border:"solid 1px", borderRadius:10}}></img>
      </div>
      <div style={{width:250, textAlign:"center", float:"left"}}>
        <Card.Title><b>TTK Services</b></Card.Title>
        <Card.Text>
          <img src="\images\star.png" style={{width:20, textAlign:"center"}}></img>
            3.6 | 20 reviews 
            <br></br>
          <button style={{borderRadius:13, width:80, border:"solid 1px", marginTop:10}}>Minicorn</button>
          <button style={{borderRadius:13, marginLeft:15, width:80, border:"solid 1px"}}>Internat</button>
        </Card.Text>
        </div>
      </Card.Body>
      </div>
      </div>
     {/* 2 */}
      <div className="col-lg-5" style={{marginLeft:10}}>
          <div class="card shadow-sm" style={{ width: '23rem', padding:10}}>
      <Card.Body>
        <div style={{width:60, float:"inline-start"}}>
      <img src="./images/656904.gif" style={{width:70, border:"solid 1px", borderRadius:10}}></img>
      </div>
      <div style={{width:250, textAlign:"center", float:"left"}}>
        <Card.Title><b>Practo</b></Card.Title>
        <Card.Text>
          <img src="\images\star.png" style={{width:20, textAlign:"center"}}></img>
            2.3 | 40 reviews 
            <br></br>
          <button style={{borderRadius:15,width:120, border:"solid 1px",marginTop:10}}>Foreign MNC</button>
          <button style={{borderRadius:15, marginLeft:15, width:80, border:"solid 1px"}}>Internate</button>
        </Card.Text>
        </div>
      </Card.Body>
      </div>
      </div>
      </div>
         {/* 3 */}
      <div class="row d-flex justify-content-center">
      <div className=" col-lg-5" style={{marginLeft:10}}>
          <div class="card shadow-sm" style={{ width: '23rem', padding:10}}>
      <Card.Body>
        <div style={{width:60, float:"inline-start"}}>
      <img src="./images/2444130.gif" style={{width:70, border:"solid 1px", borderRadius:10}}></img>
      </div>
      <div style={{width:250, textAlign:"center", float:"left"}}>
        <Card.Title><b>Impact Guru</b></Card.Title>
        <Card.Text>
        <img src="\images\star.png" style={{width:20, textAlign:"center"}}></img>
            60 | 90 reviews 
            <br></br>
          <button style={{borderRadius:15,width:80, border:"solid 1px",marginTop:10}}>Power</button>
          <button style={{borderRadius:15, marginLeft:15,width:110, border:"solid 1px"}}>Minicorn</button>
        </Card.Text>
        </div>
      </Card.Body>
      </div>
      </div>
      {/* 4 */}
      <div className=" col-lg-5" style={{marginLeft:10}}>
          <div class="card shadow-sm" style={{ width: '23rem', padding:10}}>
      <Card.Body>
        <div style={{width:60, float:"inline-start"}}>
      <img src="./images/4091516.gif" style={{width:70,border:"solid 1px", borderRadius:10}}></img>
      </div>
      <div style={{width:250, textAlign:"center", float:"left"}}>
       <Card.Title><b>Ziff Davis</b></Card.Title>
        <Card.Text>
          <img src="\images\star.png" style={{width:20, textAlign:"center"}}></img>
            1.6 | 28 reviews 
            <br></br>
          <button style={{borderRadius:15,width:80, border:"solid 1px", marginTop:10}}>Coperate</button>
          <button style={{borderRadius:15, marginLeft:15,width:80, border:"solid 1px"}}>MNC</button>
        </Card.Text>
        </div>
      </Card.Body>
      </div>
      </div>
      </div>
      {/* 5 */}
        <div class="row d-flex justify-content-center">
       <div className="col-lg-5" style={{marginLeft:10}}>
          <div class="card shadow-sm" style={{ width: '23rem', padding:10}}>
      <Card.Body>
        <div style={{width:60, float:"inline-start"}}>
      <img src=".\images\4584655.gif" style={{width:70, border:"solid 1px", borderRadius:10}}></img>
      </div>
      <div style={{width:250, textAlign:"center", float:"left"}}>
        <Card.Title><b>Bold Technologies</b></Card.Title>
        <Card.Text>
          <img src="\images\star.png" style={{width:20, textAlign:"center"}}></img>
            2.6 | 30 reviews 
            <br></br>
          <button style={{borderRadius:13, width:120, border:"solid 1px", marginTop:10}}>Internate</button>
          <button style={{borderRadius:13, marginLeft:15, width:80, border:"solid 1px"}}>MNC</button>
        </Card.Text>
        </div>
      </Card.Body>
      </div>
      </div>
       {/* 6 */}
      <div className="col-lg-5" style={{marginLeft:10}}>
          <div class="card shadow-sm" style={{ width: '23rem', padding:10}}>
      <Card.Body>
        <div style={{width:60, float:"inline-start"}}>
      <img src=".\images\1616024.gif" style={{width:70, border:"solid 1px", borderRadius:10}}></img>
      </div>
      <div style={{width:250, textAlign:"center", float:"left"}}>
        <Card.Title><b>Agostar</b></Card.Title>
        <Card.Text>
          <img src="\images\star.png" style={{width:20, textAlign:"center"}}></img>
            3.3 | 10 reviews 
            <br></br>
          <button style={{borderRadius:15,width:110, border:"solid 1px",marginTop:10}}>Foreign MNC</button>
          <button style={{borderRadius:15, marginLeft:15, width:80, border:"solid 1px"}}>Internat</button>
        </Card.Text>
        </div>
      </Card.Body>
      </div>
      </div>
      </div>
          {/* 7 */}
      <div class="row d-flex justify-content-center">
      <div className="col-lg-5" style={{marginLeft:10}}>
          <div class="card shadow-sm" style={{ width: '23rem', padding:10}}>
      <Card.Body>
        <div style={{width:60, float:"inline-start"}}>
      <img src=".\images\1211986.gif" style={{width:70, border:"solid 1px", borderRadius:10}}></img>
      </div>
      <div style={{width:250, textAlign:"center", float:"left"}}>
        <Card.Title><b>AgreeYa Solutions</b></Card.Title>
        <Card.Text>
        <img src="\images\star.png" style={{width:20, textAlign:"center"}}></img>
            3.4 | 29 reviews 
            <br></br>
          <button style={{borderRadius:15,width:80, border:"solid 1px",marginTop:10}}>Coperate</button>
          <button style={{borderRadius:15, marginLeft:15,width:80, border:"solid 1px"}}>Internate</button>
        </Card.Text>
        </div>
      </Card.Body>
      </div>
      </div>
      {/* 8 */}
      <div className="col-lg-5" style={{marginLeft:10}}>
          <div class="card shadow-sm" style={{ width: '23rem', padding:10}}>
      <Card.Body>
        <div style={{width:60, float:"inline-start"}}>
      <img src=".\images\4612291.gif" style={{width:70,border:"solid 1px", borderRadius:10}}></img>
      </div>
      <div style={{width:250, textAlign:"center", float:"left"}}>
       <Card.Title><b>Momagic Technologies</b></Card.Title>
        <Card.Text>
          <img src="\images\star.png" style={{width:20, textAlign:"center"}}></img>
            2.6 | 77 reviews 
            <br></br>
          <button style={{borderRadius:15,width:110, border:"solid 1px", marginTop:10}}>Indian MNC</button>
          <button style={{borderRadius:15, marginLeft:15,width:80, border:"solid 1px"}}>Startup</button>
        </Card.Text>
        </div>
      </Card.Body>
      </div>
      </div>
      </div>
        {/* 9 */}
      <div class="row d-flex justify-content-center">
      <div className="col-lg-5" style={{marginLeft:10}}>
          <div class="card shadow-sm" style={{ width: '23rem', padding:10}}>
      <Card.Body>
        <div style={{width:60, float:"inline-start"}}>
      <img src=".\images\177544.gif" style={{width:70, border:"solid 1px", borderRadius:10}}></img>
      </div>
      <div style={{width:250, textAlign:"center", float:"left"}}>
        <Card.Title><b>Bigstep Technologies</b></Card.Title>
        <Card.Text>
        <img src="\images\star.png" style={{width:20, textAlign:"center"}}></img>
            4.3 | 19 reviews 
            <br></br>
          <button style={{borderRadius:15,width:80, border:"solid 1px",marginTop:10}}>Coperate</button>
          <button style={{borderRadius:15, marginLeft:15,width:120, border:"solid 1px"}}>Power</button>
        </Card.Text>
        </div>
      </Card.Body>
      </div>
      </div>
      {/* 10 */}
      <div className="col-lg-5" style={{marginLeft:10}}>
          <div class="card shadow-sm" style={{ width: '23rem', padding:10}}>
      <Card.Body>
        <div style={{width:60, float:"inline-start"}}>
      <img src=".\images\4656263.gif" style={{width:70,border:"solid 1px", borderRadius:10}}></img>
      </div>
      <div style={{width:250, textAlign:"center", float:"left"}}>
       <Card.Title><b>Steag Energy Services</b></Card.Title>
        <Card.Text>
          <img src="\images\star.png" style={{width:20, textAlign:"center"}}></img>
            4.2 | 97 reviews 
            <br></br>
          <button style={{borderRadius:15,width:110, border:"solid 1px", marginTop:10}}>Foreign MNC</button>
          <button style={{borderRadius:15, marginLeft:15,width:80, border:"solid 1px"}}>Power</button>
        </Card.Text>
        </div>
      </Card.Body>
      </div>
      </div>
      </div>
      </div>
      </div>
      

        <Footer></Footer>
        </React.Fragment>
    
     )
}
export default TopCompanies;