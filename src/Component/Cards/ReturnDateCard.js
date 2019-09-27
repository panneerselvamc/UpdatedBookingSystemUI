import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Moment from "react-moment";
export default class ReturnDateCard extends Component {
  render() {
    return (
      <Card onClick={() => this.props.setIsReturnDateVisible(true)}>
        <div style={{ paddingTop: "2%", paddingLeft: "5%" }}>
          <b>Return</b>
        </div>

        <Card.Body align="center">
          {this.props.returnDate === null ? (
            <h6 style={{ color: "#9b9b9b", fontWeight: "700" }}>
              Tap to add a return date for bigger discounts
            </h6>
          ) : (
            <div>
              <OverlayTrigger
                key={"top"}
                placement={"top"}
                overlay={
                  <Tooltip id={"returnToolTip"}>
                    <strong>
                      {<Moment format="dddd">{this.props.returnDate}</Moment>}
                    </strong>
                  </Tooltip>
                }
              >
                <h4>
                  <Moment format="DD/MM/YYYY">{this.props.returnDate}</Moment>
                </h4>
              </OverlayTrigger>

              <svg
                style={{ float: "right", display: "inline-block" }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                onClick={event => {
                  event.stopPropagation();
                  this.props.setReturnDate(null);
                }}
              >
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" />
              </svg>
            </div>
          )}
        </Card.Body>
      </Card>
    );
  }
}
