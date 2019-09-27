import { CardGroup, Button } from "react-bootstrap";
import Header from "../../Component/Header";
import React, { Component } from "react";
import "rc-datepicker/lib/style.css";
import PassengerCount from "../../Component/Modal/PassengerCount";
import "../../CSS/App.css";

import DateSelector from "../../Component/Modal/DateSelector";
import OfferCard from "../../Component/Cards/OfferCard";
import SourceCard from "../../Component/Cards/SourceCard";
import DestinationCard from "../../Component/Cards/DestinationCard";

import DepartureDateCard from "../../Component/Cards/DepartureDateCard";
import ReturnDateCard from "../../Component/Cards/ReturnDateCard";
import PassengerCountCard from "../../Component/Cards/PassengerCountCard";
import axios from "axios";
export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFromModelVisible: false,
      isToModelVisible: false,
      isDepartureDateVisible: false,
      isReturnDateVisible: false,
      isTravellersAndEconomy: false,
      airports: [
        "Bangalore",
        "Chennai",
        "Mumbai",
        "Salem",
        "Delhi",
        "Hyderabad",
        "Mangalore",
        "Goa",
        "Coimbatore",
        "Port Blair",
        "Srinagar",
        "Lakshadweep",
        "Mizoram"
      ],
      from: "chennai",
      to: "Delhi",
      returnDate: null,
      departureDate: "2019-09-24",
      adult: 1,
      children: 0,
      infant: 0,
      class: null
    };
  }
  setDepatureDate = date => {
    this.setState({
      departureDate: date
    });
  };
  setReturnDate = date => {
    this.setState({
      returnDate: date
    });
  };

  setIsFromModelVisible = booleanValue => {
    this.setState({
      isFromModelVisible: booleanValue
    });
  };
  setSelectedFromLocation = location => {
    this.setState({
      from: location
    });
  };
  setIsToModelVisible = booleanValue => {
    this.setState({
      isToModelVisible: booleanValue
    });
  };
  setSelectedToLocation = location => {
    this.setState({
      to: location
    });
  };

  setIsDepartureDateVisible = booleanValue => {
    this.setState({
      isDepartureDateVisible: booleanValue
    });
  };
  setIsReturnDateVisible = booleanValue => {
    this.setState({
      isReturnDateVisible: booleanValue
    });
  };
  setIsTravellersAndEconomy = booleanValue => {
    this.setState({
      isTravellersAndEconomy: booleanValue
    });
  };

  setClass = value => {
    this.setState({
      class: value
    });
  };
  setAdultCount = value => {
    this.setState({
      adult: value
    });
  };
  setChildrenCount = value => {
    this.setState({
      children: value
    });
  };
  setInfantCount = value => {
    this.setState({
      infant: value
    });
  };

  searchFlightAPI = () => {
    this.props.setData(this.state);

  };

  errorMessage = () => {
    if (this.state.adult < 1) {
      return (
        <div>
          <b>No of Adult Should be greater than 1</b>
        </div>
      );
    } else if (
      Number(this.state.adult) +
        Number(this.state.children) +
        Number(this.state.infant) >
      9
    ) {
      return (
        <div>
          <b>Total No of Passengers should be less than 9 </b>
        </div>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <div>
        <div className="bodyColor">
          <Header>
            <div
              style={{
                backgroundColor: "white",
                margin: "3%",
                borderRadius: "25px"
              }}
            >
              <CardGroup style={{ padding: "3%", height: "10%" }}>
                <SourceCard
                  from={this.state.from}
                  airports={this.state.airports}
                  isFromModelVisible={this.state.isFromModelVisible}
                  setIsFromModelVisible={booleanValue =>
                    this.setIsFromModelVisible(booleanValue)
                  }
                  setSelectedFromLocation={location =>
                    this.setSelectedFromLocation(location)
                  }
                  to={this.state.to}
                />
                <DestinationCard
                  from={this.state.from}
                  airports={this.state.airports}
                  isToModelVisible={this.state.isToModelVisible}
                  setIsToModelVisible={booleanValue =>
                    this.setIsToModelVisible(booleanValue)
                  }
                  setSelectedToLocation={location =>
                    this.setSelectedToLocation(location)
                  }
                  to={this.state.to}
                />
                <DepartureDateCard
                  departureDate={this.state.departureDate}
                  setIsDepartureDateVisible={booleanValue =>
                    this.setIsDepartureDateVisible(booleanValue)
                  }
                />
                <ReturnDateCard
                  setReturnDate={date => this.setReturnDate(date)}
                  returnDate={this.state.returnDate}
                  setIsReturnDateVisible={booleanValue =>
                    this.setIsReturnDateVisible(booleanValue)
                  }
                />
                <PassengerCountCard
                  setIsTravellersAndEconomy={booleanValue =>
                    this.setIsTravellersAndEconomy(booleanValue)
                  }
                  children={this.state.children}
                  infant={this.state.infant}
                  adult={this.state.adult}
                />
              </CardGroup>

              {this.state.isDepartureDateVisible ? (
                <DateSelector
                  visibility={this.state.isDepartureDateVisible}
                  minDate={new Date()}
                  dateChangeHandler={date => {
                    this.setDepatureDate(date);
                    this.setIsDepartureDateVisible(false);
                  }}
                />
              ) : null}

              {this.state.isReturnDateVisible ? (
                <DateSelector
                  minDate={this.state.departureDate}
                  visibility={this.state.isReturnDateVisible}
                  dateChangeHandler={date => {
                    this.setReturnDate(date);
                    this.setIsReturnDateVisible(false);
                  }}
                />
              ) : null}

              {this.state.isTravellersAndEconomy ? (
                <PassengerCount
                  setChildrenCount={count => this.setChildrenCount(count)}
                  setInfantCount={count => this.setInfantCount(count)}
                  setAdultCount={count => this.setAdultCount(count)}
                  errorMessage={this.errorMessage}
                  adultCount={this.state.adult}
                  childrenCount={this.state.children}
                  infantCount={this.state.infant}
                  visibility={this.state.isTravellersAndEconomy}
                  class={this.state.class}
                  close={() => {
                    this.setState({
                      isTravellersAndEconomy: false
                    });
                  }}
                  setClass={value => this.setClass(value)}
                />
              ) : null}
            </div>
            <Button
              style={{
                margin: "0 auto",
                display: "block",
                width: "12%",
                fontSize: "25px",
                borderRadius: "20px",
                marginTop: "-4.5%"
              }}
              onClick={this.searchFlightAPI}
            >
              <b>Search</b>
            </Button>
          </Header>

          <div
            style={{
              position: "relative",
              marginTop: "2%"
            }}
          >
            <div style={{ backgroundColor: "white", paddingTop: "2%" }}></div>
            <h3
              style={{
                paddingLeft: "15px",
                backgroundColor: "white",
                margin: "0px"
              }}
            >
              Super Offers
            </h3>
            <OfferCard />
          </div>
        </div>
      </div>
    );
  }
}
