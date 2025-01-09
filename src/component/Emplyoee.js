import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

function Emplyoee() {
  
const [validated, setValidated] = useState(false);

const handleSubmit = (event) => {
  alert("Registration is Successfull")
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }

  setValidated(true);
  
};
function Click(){
}
  return (
    <div>
      <div style={{ backgroundColor:"#1E90FF", height:70, padding:10}}>
        <h1 style={{textAlign:"center", color:"white", background:20}}><b>Employer</b></h1>
        </div>
        <br></br>
    <Form  required noValidate validated={validated} onSubmit={handleSubmit}
     style={{width:800}} className=' mx-auto border shadow p-4 text-start'>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Person Name</Form.Label>
          <Form.Control required type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control required type="email" placeholder="Enter email" />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control required type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCompanyName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control required type="text" placeholder="Enter Company Name" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridTagLine">
        <Form.Label>Tagline</Form.Label>
        <Form.Control required placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control required placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check required type="checkbox" label="Check me out" />
      </Form.Group>

      <Button onSubmit={Click} variant="primary" type="submit" style={{marginLeft:350}}>
        Register
      </Button>
    </Form>
    </div>
  );
}

export default Emplyoee;