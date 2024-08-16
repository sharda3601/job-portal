import Button from 'react-bootstrap/Button';
import React,{Component} from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:'',
      role:''
       }
 }

 handleUsernameChange = event =>{
     this.setState({
         username: event.target.value
     })
 }
 handleChangeComment = event =>{
     this.setState({
         password: event.target.value
     })
 }

 handleTopicChange = event =>{
        this.setState({
            role: event.target.value
        })
    }
 
 handleSubmit = (event) => {
  
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }
  else{
    alert("you are logged in sucessfully!")
}; 

}
 
render(){

  if(this.state.role === 'Admin'){
    return <div>

          <Form action="Dashboard" required noValidate  onSubmit={this.handleSubmit}
          style={{width:400}} className='mx-auto border shadow text-start mt-5'>
                   <h1 style={{ backgroundColor:"#1E90FF",padding: 10, textAlign:"center", color:"white", background:20}} className='bg-primary'><b>Login </b></h1>
     
           <div className='px-3'>
            <select value={this.state.role} onChange={this.handleTopicChange} className='form-control dropdown-toggle my-3'>
            <option value="role">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Employer">Employer</option>
            <option value="JobSeeker">JobSeeker</option>
        </select>
            </div> 
     
           <Form.Group className="mb-3 px-4 mt-4" controlId="formGridTagLine">
             <Form.Label className='ps-1' id="uname">Email ID</Form.Label>
             <Form.Control type='text' required placeholder="Enter Email ID" value={this.state.username} onChange={this.handleUsernameChange}/>
           </Form.Group>
     
           <Form.Group className="mb-3 px-4" controlId="formGridDescription">
             <Form.Label className='ms-1' id="pass">Password</Form.Label>
             <Form.Control type='password' required placeholder="Enter Password" value={this.state.password} onChange={this.handleChangeComment} />
           </Form.Group>
            <Row className='mb-3'>
           <Form.Group className="mb-3 px-4" id="formGridCheckbox">
             <Form.Check required type="checkbox" label="Check me out" />
             <p className='text-primary text-center mt-3 mb-0'>If you are not registered <a href='Register'> Register Here</a>
      </p>
           </Form.Group>
           </Row>
           <Button  variant="primary" type="submit" className='mx-auto d-block mb-3 px-4'>
            Login
           </Button>
         </Form>
        

      
  </div>
  }
  else if(this.state.role === 'Employer'){
    return <div>
          <Form action="CompaniesForm" required noValidate  onSubmit={this.handleSubmit}
          style={{width:400}} className='mx-auto border shadow text-start mt-5'>
                   <h1 style={{ backgroundColor:"#1E90FF",padding: 10, textAlign:"center", color:"white", background:20}} className='bg-primary'><b>Login </b></h1>
     
           <div className='px-3'>
            <select value={this.state.role} onChange={this.handleTopicChange} className='form-control dropdown-toggle my-3'>
            <option value="role">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Employer">Employer</option>
            <option value="JobSeeker">JobSeeker</option>
        </select>
            </div> 
     
           <Form.Group className="mb-3 px-4 mt-4" controlId="formGridTagLine">
             <Form.Label className='ps-1' id="uname">Email ID</Form.Label>
             <Form.Control type='text' required placeholder="Enter Email ID" value={this.state.username} onChange={this.handleUsernameChange}/>
           </Form.Group>
     
           <Form.Group className="mb-3 px-4" controlId="formGridDescription">
             <Form.Label className='ms-1' id="pass">Password</Form.Label>
             <Form.Control type='password' required placeholder="Enter Password" value={this.state.password} onChange={this.handleChangeComment} />
           </Form.Group>
            <Row className='mb-3'>
           <Form.Group className="mb-3 px-4" id="formGridCheckbox">
             <Form.Check required type="checkbox" label="Check me out" />
             <p className='text-primary text-center mt-3 mb-0'>If you are not registered <a href='Register'> Register Here</a>
      </p>
           </Form.Group>
           </Row>
           <Button  variant="primary" type="submit" className='mx-auto d-block mb-3 px-4'>
            Login
           </Button>
         </Form>
         </div>
  }
  else{
   return <div>
            <Form action="Home" required noValidate onSubmit={this.handleSubmit}
            style={{width:400}} className='mx-auto border shadow text-start my-5'>
                     <h1 style={{ backgroundColor:"#1E90FF",padding: 10, textAlign:"center", color:"white", background:20}} className='bg-primary'><b>Login </b></h1>
       
       
                     <div className='px-3'>
            <select value={this.state.role} onChange={this.handleTopicChange} className='form-control dropdown-toggle my-3'>
            <option value="role">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Employer">Employer</option>
            <option value="JobSeeker">JobSeeker</option>
        </select>
            </div> 

             <Form.Group className="mb-3 px-4 mt-4" controlId="formGridTagLine">
               <Form.Label className='ps-1' id="uname">Email ID</Form.Label>
               <Form.Control type='text' required placeholder="Enter Email ID"  value={this.state.username} onChange={this.handleUsernameChange}/>
             </Form.Group>
       
             <Form.Group className="mb-3 px-4" controlId="formGridDescription">
               <Form.Label className='ms-1' id="pass">Password</Form.Label>
               <Form.Control type='password' required placeholder="Enter Password" value={this.state.password} onChange={this.handleChangeComment}/>
             </Form.Group>
              <Row className='mb-3'>
             <Form.Group className="mb-3 px-4" id="formGridCheckbox">
               <Form.Check required type="checkbox" label="Check me out" />
               <p className='text-primary text-center mt-3 mb-0'>If you are not registered <a href='Register'> Register Here</a>
        </p>
             </Form.Group>
             </Row>
             <Button  variant="primary" type="submit" className='mx-auto d-block mb-3 px-4'>
              Login
             </Button>
           </Form>
        
    </div>
  } 
  
  
  }
}

export default Login;