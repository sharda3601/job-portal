import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

function CompaniesForm() {
  
const [validated, setValidated] = useState(false);
const [show, setShow] = useState(true);


{/** */}


const handleSubmit = (event) => {
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
    alert("Saved Successfully!");
    return <div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Saved Sucessfully!</strong> 
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

  }

  setValidated(true);
  
};

  return (
    <div>
      <div style={{ backgroundColor:"#1E90FF", height:70, padding:10}}>
        <h1 style={{textAlign:"center", color:"white", background:20}}><b>Companies Details</b></h1>
        </div>
        <br></br>
    <Form action='JobForm' required noValidate validated={validated} onSubmit={handleSubmit}
     style={{width:600}} className='mx-auto border shadow p-4 text-start'>
     
      <Row>
        <Form.Group as={Col} controlId="formGridCompanyName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control required type="text" placeholder="Enter Company Name" />
        </Form.Group>
      </Row>
        <br></br>
      <Form.Group className="mb-3" controlId="formGridLogo">
        <Form.Label>Company Logo</Form.Label>
        <Form.Control required type="file" placeholder="" />
      </Form.Group>
       
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridYear">
          <Form.Label>Year</Form.Label>
          <Form.Control required type="date" placeholder="Enter year" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmp">
          <Form.Label>Emplyoer Name</Form.Label>
          <Form.Control required type="text" placeholder="" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control required placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check required type="checkbox" label="Check me out" />
      </Form.Group>

      <Button  variant="primary" onClick={() => setShow(true)} type="submit" style={{marginLeft:250}} className='d-block mx-auto'>
          Save
      </Button>
    </Form>

    {/*<div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Saved Sucessfully!</strong> 
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> */}
    </div>
  );
}

export default CompaniesForm;