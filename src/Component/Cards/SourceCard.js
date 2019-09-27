import React, { Component } from "react";

import { Typeahead } from "react-bootstrap-typeahead";
import { Card } from "react-bootstrap";
export default class SourceCard extends Component {
  render() {
    return (
      <Card onClick={() => this.props.setIsFromModelVisible(true)}>
        <div style={{ paddingTop: "2%", paddingLeft: "5%" }}>
          <b>From</b>
        </div>
        <Card.Body>
          <Card.Text align="center">
            <b>
              <h3>{this.props.from}</h3>
            </b>
            {this.props.isFromModelVisible ? (
              <Typeahead
                onChange={selected => {
                  this.props.setSelectedFromLocation(selected[0]);
                  this.props.setIsFromModelVisible(false);
                  console.log(selected);
                }}
                labelKey="fromSelect"
                multiple={false}
                options={this.props.airports.filter(
                  airport => airport !== this.props.to
                )}
                placeholder="Choose a city..."
              />
            ) : null}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
