//import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './component/Home';
import Nav from './component/Nav';
import FresherJob from './component/FresherJob';
import SalesJob from './component/SalesJob';
import RemoteJob from './component/RemoteJob';
import ITJob from './component/ITJob';
import ITCompanies from './component/ITCompanies';
import TopCompanies from './component/TopCompanies';
import ProductBasedCompanies from './component/ProductBasedCompanies';
import MNCCompanies from './component/MNCCompanies';
import Dashboard from './component/Dashboard';
import Login from './component/Login';
import Services from './component/Services';
import ContactForm from './component/ContactForm';
import About from './component/About';
import ServiceCard from './component/ServiceCard';
import Emptbl from './component/Emptbl';
import Candidates from './component/Candidates';

import Jobseeker from './component/Jobseeker';
import CompaniesForm from './component/CompaniesForm';
import JobForm from './component/JobForm';
import Register from './component/Register';
import CategoryJob from './component/CategoryJob';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
          <Route index element={<Login />} />
          <Route index element={<Home />} />
           {/* <Route path="Job" element={<Job />} /> */}
            <Route path="FresherJob" element={<FresherJob />} />
            <Route path="SalesJob" element={<SalesJob />} />
            <Route path="RemoteJob" element={<RemoteJob />} />
            <Route path="ITJob" element={<ITJob />} />

            {/*<Route path="Companies" element={<Companies />} /> */}
            <Route path="ITCompanies" element={<ITCompanies />} />
            <Route path="TopCompanies" element={<TopCompanies />} />
            <Route path="MNCCompanies" element={<MNCCompanies />} />
            <Route path="ProductBasedCompanies" element={<ProductBasedCompanies />} />

            <Route path="Services" element={<Services />} />
            <Route path="About" element={<About />} />
            <Route path="ServiceCard" element={<ServiceCard />} />
            <Route path="ContactForm" element={<ContactForm />} />
            <Route path="Candidates" element={<Candidates />} />

            <Route path='CompaniesForm' element={<CompaniesForm/>}/> 

              <Route path='Login' element={<Login/>}/> 
              <Route path="Home" element={<Home />} />
              <Route path='Jobseeker' element={<Jobseeker/>}/> 
              <Route path='Register' element={<Register/>}/> 
              <Route path='JobForm' element={<JobForm/>}/> 

              <Route path="Emptbl" element={<Emptbl/>}/>
                  <Route path='Dashboard' element={<Dashboard/>}/>
                  <Route path="Emptbl" element={<Emptbl/>}/>
                  <Route path="CategoryJob" element={<CategoryJob/>}/>


          </Route>
        </Routes>
    </BrowserRouter> 
   </div>
  );
}

export default App;
