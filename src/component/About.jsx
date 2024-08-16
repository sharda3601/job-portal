import React from "react";
import Header from "./Header";
import Footer from './Footer';

function About(){
    return <React.Fragment>
        <Header></Header>
         {/**about us */}
    <div className="m-5 text-start p-5 w-75 shadow-sm mx-auto">
        <h1  className="text-center text-danger">About Us</h1>
        <p>
        Naukri is a recruitment platform that provides hiring-related services to corporates/recruiters, placement agencies, and job seekers in India and overseas. It 
        offers multiple products like Resume Database Access, Job Listings, and Response Management Tools.
        </p>

      <h3 className="text-warning">  Reasons why Naukri portal is the best website for job search
Why do we say that naukri is the best website for job search?</h3>

<b>Here is why!</b>
<p>
Naukri.com had its inception in 1997, Naukri has seen continuous growth while outperforming its competitors in every sphere.

The site enjoys a traffic share of over 70% as per a similar web.

Naukri is a recruitment platform that provides hiring-related services to corporates/recruiters, placement agencies, and job seekers in India and overseas.

It offers multiple products like Resume Database Access, Job Listings, and Response Management Tools.

With more than 5,25,000 jobs live at any given point and over 65 million CVs, Naukri has serviced over 76,000 corporate clients in 2018-2019.

The company operates through 56 offices in 42 cities across India with overseas offices in Dubai, Riyadh, Abu Dhabi, and Bahrain.

Here are a few other reasons why Naukri portal is the best job website for job search.
</p>
<div className="row">
    <div className="col-sm">
    <img src="./images/role-collection-ot.png" alt="img1" width={400}></img>

    </div>
    <div className="col-sm">
    <h4 className="text-danger">1. Job Surfing blog</h4>
<p>
Naukri blog is the leading go to professional blog of Naukri which covers an array of topics which can help you in discovering the right profession.

It includes salary insights, career advice, interview advice & much more.

Its highly recommended to visit naukri blog naukri blog to sort relevant & quality answers related to your career growth.
</p>
    </div>
</div>
<div className="row">
    <div className="col-sm">
    <h4 className="text-danger">
2. Career-related tags in Naukri blog
</h4>
<p>Naukri's blog paves the way for ease. The moment you visit the Naukri blog website, the first thing you see is the tags on top of the page.

These tags are designed specifically to ease a budding professional to find the right career advice as required.


</p>
    </div>
    
</div>

<div className="row">
<div className="col-sm">
<h4 className="text-danger">Jobs</h4>
<p>
This is the first tag that comes on top of the homepage of the Naukri blog.

This tag is designed to redirect you to the Naukri portal wherein you can search & apply for jobs.

Jobs can be searched using skills, designations, or companies. You can also assign a location where you want to search for jobs.

</p>
</div>
<div className="col-sm">
<img src="images/Screenshot 2024-06-06 193951.png" alt="" width={300}></img>
</div>
</div>

<div className="row">
    <div className="col-sm">
    <img src="images/eventsSwiperLeft-ot (1).png" alt="" width={300}></img>

    </div>
    <div className="col-sm">
    <h4 className="text-danger">Interview Advice</h4>
<p>
This tag is designated to guide job seekers to prepare better for upcoming interviews.

Under this tag you can find relevant articles that focus on giving knowledgeable insights to crack interviews.

The articles range from questions asked during interviews & how to answer them on how to dress during an interview.

All important aspects are covered in form of blogs to help in brightening your chances of clearing an interview.

Its a one point stop for everything which shall shape your future course of interviews.
</p>

    </div>

</div>


<h4 className="text-danger">Career advice</h4>
<p>
Haven’t we all been confused about our career at some point in our lives? Always wondered whom to consult for career dilemmas?

Well, this tag is indeed perfect for that. "Career advice" tag guides a professional or jobseeker to a wide range of blogs that aim at providing clarity on questions that may arise while planning your career.

It gives inside reliable tips of various industries to ensure a smooth career advance. Which career to choose, how to choose, how to choose the right company and so much more.

This tag covers each aspect which may presently or in future help in shaping your career fruitfully.


        </p>
    </div>
    <Footer></Footer>
    </React.Fragment>
}
export default About;