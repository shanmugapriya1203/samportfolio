import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Contact.css';



const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };
const handleSubmit= async(e)=>{
e.preventDefault()
setButtonText('Sending...');
let response= await fetch('https://portfolio-kfok.onrender.com/contact',{
    method:'POST',
    headers:{
        "Content-Type":"Application/json;charset=utf-8",

    },
    body:JSON.stringify(formDetails),
});
setButtonText("Send")
let result=  await response.json()
setFormDetails(formInitialDetails)
if(result.code===200){
    setStatus({success:true,message:'Message Sent Successfully'})
}
else{
    setStatus({succes:false,message:'Something went wrong,Please try again letter'})
}
}

  return (
    <div className="d-flex justify-content-center align-items-center contact " id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6} xs={12} className="mx-auto">
            <h2>Get in Touch</h2>
          </Col>
          <Col md={6} xs={12} className="mx-auto">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={formDetails.firstName}
                placeholder="First Name"
                onChange={(e) => onFormUpdate('firstName', e.target.value)}
              />
               <input
                type="text"
                value={formDetails.lastName}
                placeholder="Last Name"
                onChange={(e) => onFormUpdate('lastName', e.target.value)}
              />
               <input
                type="email"
                value={formDetails.email}
                placeholder="Email"
                onChange={(e) => onFormUpdate('email', e.target.value)}
              />
               <input
                type="tel"
                value={formDetails.phone}
                placeholder="Phone Num"
                onChange={(e) => onFormUpdate('phone', e.target.value)}
              />
                <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
            
            </form>
            {
  status.message && (
    <Col>
      <p style={{color:'aliceblue'}} className={status.success === false ? "danger" : "success"}>{status.message}</p>
    </Col>
  )
}
</Col>

         
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
