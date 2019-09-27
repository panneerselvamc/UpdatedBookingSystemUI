import React, { Component } from 'react'

import { Card } from "react-bootstrap";

export default class PassengerCountCard extends Component {
  render() {
    return (
        <Card>
        <div style={{ paddingTop: "2%", paddingLeft: "5%" }}>
          <b>Travellers and Class</b>
        </div>

        <Card.Body
          onClick={() =>this.props.setIsTravellersAndEconomy(true)}
        >
          <Card.Text>
            <h6 style={{margin:"0px"}}>Adult: {this.props.adult}</h6>
            <h6 style={{margin:"0px"}}>Children: {this.props.children}</h6>
            <h6 style={{margin:"0px"}}>Infant: {this.props.infant}</h6>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}
