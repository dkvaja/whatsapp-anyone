import React, { useState } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import logo from "./Images/logo.png";

export default function App() {

  const [data, setData] = useState({
    number: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!!data.number && !!data.message) {
      try {
        window.open(`http://wa.me/${data.number}?text=${data.message}`).focus();
      } catch (err) {
        window.location.assign(`http://wa.me/${data.number}?text=${data.message}`);
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    })
  }
  return (
    <>
      <Container fluid className='py-5 container d-flex flex-column align-items-center flex-nowrap'>
        <Row className='box d-flex flex-column align-items-center flex-nowrap justify-content-center'>
          <Row>
            <div className="logo p-4 d-flex text-center flex-column">
              <img src={logo} alt="WhatsApp Anyone Logo" className="m-auto mb-3" />
              <h2>WhatsApp Anyone</h2>
              <p>Send Message to unsaved contact in WhatsApp</p>
              <p>SECURE 🔐 | FAST 🚀 | HASSLE FREE 😃</p>
              <p>Please Add Coutry Code before number</p>
            </div>
          </Row>
          <Row className="text-center p-4">
            <Form className='text-center' onSubmit={handleSubmit}>
              <Form.Group className="m-auto mb-4 col-lg-5 col-md-8 " controlId="exampleForm.ControlInput1">
                <Form.Control type="tel" name="number" placeholder="Enter Whatsapp Number with Country Code" required onChange={handleChange} value={data.number} maxLength='12' />
              </Form.Group>
              <Form.Group className="m-auto mb-4 col-lg-5 col-md-8" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" name="message" style={{ resize: "none" }} rows={4} placeholder="Enter your message here" required onChange={handleChange} value={data.message} />
              </Form.Group>
              <Button type="submit" className="btn">Send Message</Button>
            </Form>
          </Row>
        </Row>
      </Container>
    </>
  );
}
