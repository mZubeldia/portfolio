import SocialMedia from "./SocialMedia";
import { Form, FloatingLabel, Row, Col, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <main className="main main_contact">
      <SocialMedia />

      <h2 className="page_title">Contact me</h2>
      <Form className="contact-form m-2" action="https://formspree.io/f/xjvlvooa" method="POST">
        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Name"
              className="mb-3"
              htmlFor="name"
            >
              <Form.Control
                required
                name="name"
                id="name"
                type="text"
                placeholder="John Smith"
              />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              htmlFor="email"
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                required
                name="email"
                id="email"
                type="email"
                placeholder="name@example.com"
              />
            </FloatingLabel>
          </Col>
        </Row>

        <FloatingLabel
          htmlFor="message"
          controlId="floatingTextarea2"
          label="I want to work with you!"
        >
          <Form.Control
            required
            name="message"
            id="message"
            as="textarea"
            placeholder="I want to work with you!"
            style={{ height: "10rem" }}
          />
        </FloatingLabel>

        <Row>
          <Col>
            <Button className="my-3 myButton" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </main>
  );
};

export default Contact;

/*

<form
        action="https://formspree.io/f/xjvlvooa"
        method="POST"
        className="form_contact"
      >
        <div className="form-group col-md-12">
          <label htmlFor="name">Full Name</label>
          <input
            required
            name="name"
            type="text"
            className="form-control"
            id="name"
            placeholder="John Smith"
          />
        </div>
        <div className="form-group col-md-12">
          <label htmlFor="email">Email</label>
          <input
            required
            name="email"
            type="email"
            className="form-control"
            id="email"
            placeholder="johnsmith@example.com"
          />
        </div>
        <div className="form-group col-md-12">
          <label htmlFor="message">Reasons</label>
          <textarea
            required
            name="message"
            type="text"
            rows="4"
            className="form-control"
            id="message"
            placeholder="I want to work with you!"
          ></textarea>
        </div>
        <button className="myButton">Submit</button>
      </form>

*/
