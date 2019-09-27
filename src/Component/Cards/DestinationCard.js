import React, { Component } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { Card } from "react-bootstrap";
export default class DestinationCard extends Component {
  render() {
    return (
      <Card
        onClick={() => this.props.setIsToModelVisible(true)}
      >
        <div style={{ paddingTop: "2%", paddingLeft: "5%" }}>
          <b>To</b>
        </div>
        <Card.Body>
          <Card.Text align="center">
            <b>
              <h3>{this.props.to}</h3>
            </b>
            {this.props.isToModelVisible ? (
              <Typeahead
                onChange={selected => {
                this.props.setIsToModelVisible(false);
                this.props.setSelectedToLocation(selected[0])
                }}
                labelKey="fromSelect"
                multiple={false}
                options={this.props.airports.filter(
                  airport => airport !== this.props.from
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
