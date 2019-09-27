import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Moment from "react-moment";
export default class DepartureDateCard extends Component {
  render() {
    return (
      <Card onClick={() => this.props.setIsDepartureDateVisible(true)}>
        <div style={{ paddingTop: "2%", paddingLeft: "5%" }}>
          <b>Departure</b>
        </div>

        <Card.Body align="center">
          <OverlayTrigger
            key={"top"}
            placement={"top"}
            overlay={
              <Tooltip id={"departueToolTip"}>
                <strong>
                  {<Moment format="dddd">{this.props.departureDate}</Moment>}
                </strong>
              </Tooltip>
            }
          >
            <h4>
              <Moment format="DD/MM/YYYY">{this.props.departureDate}</Moment>
            </h4>
          </OverlayTrigger>
        </Card.Body>
      </Card>
    );
  }
}
