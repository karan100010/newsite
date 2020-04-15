import React from "react"


import { Component } from 'react';
import axios from 'axios';
import {Form,Button} from "react-bootstrap"
class Contact extends Component {
  constructor() {
    super();
    this.state = {
      fname: '',
      lname: '',
      email: '',
    };
  }

  onChange = (e) => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const { fname, lname, email } = this.state;
    console.log(this.state)

    axios.post('http://localhost:5000/contact', { fname, lname, email })
      .then((result) => {
        //access the results here....
      });
  }

  render() {
    const { fname, lname, email } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Label>First name</Form.Label>
        <Form.Row>
        <Form.Group md="6" >
     
        <Form.Control
          type="text"
          name="fname"
          
          value={fname}
          onChange={this.onChange}
          placeholder="First Name" 
        />
     
        <Form.Label>Last name</Form.Label>
        <Form.Control
          type="text"
          name="lname"
          
          value={lname}
          placeholder="Last Name"
          onChange={this.onChange}
        />
        <Form.Control
          type="text"
          name="email"
          placeholder="email"
          value={email}
          onChange={this.onChange}
        
        />
        </Form.Group>
        </Form.Row>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}
export default Contact