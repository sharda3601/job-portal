import React from "react";
import Header from "./Header";
import Section2 from "./Section2";
import Footer from "./Footer";
import Section3 from "./Section3";
import Section4 from "./Section4";


function Home(){
    return <>
  <Header></Header>
{/* search bar */}
<div className="bg-body-tertiary" style={{padding:70}}>
<h1 style={{fontWeight:800}}>Find Your Dream Job Now</h1>
<h4>5 lakhs+ jobs for you to explore</h4>
<div className="mx-auto mt-4 border bg-light justify-content-between"
 style={{borderRadius:40,position: "relative",width:70+"%"}}>
<input type="search" className="form-control border-0 p-4 px-5" placeholder="Enter Skills / designation / companies | Select experience | Enter location"
style={{borderRadius:40}}></input>
  <i className="bi bi-search" style={{position:"absolute",top :20, left: 10,fontSize : 25}}></i>
<button type="button" className="btn btn-primary px-4" style={{position:"absolute",top :20, right: 40,borderRadius:40}}><b>Search</b></button>
</div>
</div>
{/**section2 */}
<Section2></Section2>
{/**section3 */}
<Section3></Section3>
{/**section4 */}
<Section4></Section4>
{/**footer */}
<Footer></Footer>
    </>
}
export default Home;