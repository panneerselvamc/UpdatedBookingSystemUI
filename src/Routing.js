import React, { Component } from "react";
import { withRouter, Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import HomePage from "./Component/Pages/HomePage";
import FlightDataPage from "./Component/Pages/FlightDataPage";

import axios from "axios";
let history = createBrowserHistory();
class Routing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PassengerData: null,
      FlightData: null
    };
  }

  setPassengerData = passengerData => {
    this.setState({
      PassengerData: passengerData,
      flightData: null
    });
    const userdata = JSON.stringify({
      sourceAddress: passengerData.from,
      destination: passengerData.to,
      dateOfTravel: passengerData.departureDate,
      transportClass: passengerData.transportClass,
      transportType: passengerData.transportType
    });

    axios
      .post("http://localhost:8880/searchforflight", userdata, {
        headers: { "Content-Type": "application/json" }
      })

      .then(res => {
        this.setState({
          flightData: res.data
        });
        history.push("/details");
      });

    // if (this.state.flightData !== null) {
    //   history.push("/details");
    // }
  };

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route
            exact
            path="/home"
            component={() => (
              <HomePage
                setData={passengerData => {
                  this.setPassengerData(passengerData);
                }}
              />
            )}
          />
          <Route
            exact
            path="/details"
            component={() => (
              <FlightDataPage FlightData={this.state.flightData} />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default withRouter(Routing);
