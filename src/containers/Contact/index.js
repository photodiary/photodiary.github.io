import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import './style.css';
import Header from "../../components/Header";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      status: "",
      name: "",
      email: "",
      message: ""
    };
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({[name]: value});
}

  render() {
    const { status } = this.state;
    return (
      <div id="kontakt" className="content" style={{ padding: "10px" }}>
        <hr />
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
            <form
              onSubmit={this.submitForm}
              action="https://formspree.io/xvowddrj"
              method="POST"
            >
              <Label>Imię i Nazwisko:</Label>
              <Input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange}/>
              <Label>Email:</Label>
              <Input type="email" name="email" id="email"value={this.state.email} onChange={this.handleChange} />
              <Label>Wiadomość:</Label>
              <Input type="textarea" name="message" id="message" value={this.state.message} onChange={this.handleChange} rows="4" style={{ resize: "none" }} />
              <div className="buttonArea">
                {status === "SUCCESS" ? <p>Dziękuję za wiadomość!</p> : <Button>Wyślij</Button>}
                {status === "ERROR" && <p>Wystąpił błąd - spróbuj ponownie później.</p>}
                {status === "NODATA" && <p>Uzupełnij wszystkie pola.</p>}
                {status === "WRONGEMAIL" && <p>Niaprawidłowy adres email!</p>}
              </div>
            </form>
          </Col>
        </Row>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    if (this.state.name === '' || this.state.email === '' || this.state.message === '') {
      this.setState({ status: "NODATA" });
      return;
    } else {
      const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regex.test(this.state.email)){
        this.setState({ status: "WRONGEMAIL" });
        return;
      }
    }
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
        if (this.state.name === '' || this.state.email === '' || this.state.message === '')
          this.setState({ status: "NODATA" });
        else this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
