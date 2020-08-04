import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import './style.css';
import Header from "../../components/Header";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div id="kontakt" className="content" style={{padding: "10px"}}>
      <hr/>
        <Row>
          <Col>
            <h3>Kontakt</h3>

            <a href="mailto:anna.nogalska@interia.eu" className="a-link">
              <i class="icon fas fa-envelope" />
              <p>anna.nogalska@interia.eu</p>
            </a>

            <a href="https://www.instagram.com/annanogalska.photodiary/" className="a-link">
              <i class="icon fab fa-instagram" id="instagram-icon" />
              <p>@annanogalska.photodiary</p></a>

            <a href="https://www.facebook.com/annanogalska.photodiary/" className="a-link">
              <i class="icon fab fa-facebook" />
              <p>fb.com/annanogalska.photodiary</p></a>

            <i class="icon fas fa-map-marker-alt"></i>
            <p>Śląsk</p>

            <div className="separator"><hr /></div>

          </Col>
          <Col md="6" xs="12">
            <h4>Formularz kontaktowy</h4>
            <Form
              onSubmit={this.submitForm}
              action="https://formspree.io/xvowddrj"
              method="POST"
            >
              <Label>Imię i Nazwisko:</Label>
              <Input type="text" name="name" />
              <Label>Email:</Label>
              <Input type="email" name="email" />
              <Label>Wiadomość:</Label>
              <Input type="textarea" name="message" rows="4" style={{ resize: "none" }} />
              <div className="buttonArea">
                {status === "SUCCESS" ? <p>Dziękuję za wiadomość!</p> : <Button>Wyślij</Button>}
                {status === "ERROR" && <p>Wystąpił błąd - spróbuj ponownie później.</p>}
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
