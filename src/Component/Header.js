import React, { Component } from "react";
import { Button, FormControl, Form, Nav, Navbar } from "react-bootstrap";
export default class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar className="justify-content-end" bg="dark" variant="dark">
            <b style={{ color: "white" }} >Fight Booking System</b>
            <Nav className="mr-auto"/>
            <Form inline >
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-info" onClick={() => {}}>
                Search
              </Button>
            </Form>
          </Navbar>
        </div>

        {this.props.children}
      </div>
    );
  }
}
