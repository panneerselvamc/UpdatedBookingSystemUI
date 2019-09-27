import React, { Component } from "react";
import Sbi from '../../Pictures/SBI2.jpg';

import AirIndia1 from '../../Pictures/AirIndia1.jpg'
import Suprised from '../../Pictures/Suprised.jpg';
import HDFC from '../../Pictures/HDFC1.jpg'
import {
  Card,
  CardTitle,
  CardText,

} from "react-mdl";
export default class OfferCard extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "250px",
          overflowY: "hidden",
          whiteSpace: "nowrap",
          overflowX: "auto",
          
        }}
      >
       

        <Card
          shadow={0}
          style={{
            width: "445px",
            paddingLeft: "15px",
            display: "inline-block"
          }}
        >
          <CardTitle
            style={{
              color: "white",
              height: "176px",
            //   backgroundImage:"url(C:/Users/pselvam6400/Desktop/booking-system-ui/src/Pictures/SBI2.jpg)",
              background:
                `url(${AirIndia1}) center / cover`
            }}
          >
           Great deals on AirIndia!
          </CardTitle>
          <CardText>
          Get up to Rs 3000 Off per Passenger. Coupon: FBSAI3K
          </CardText>
        </Card>
        <Card
          shadow={0}
          style={{
            width: "445px",
            paddingLeft: "15px",
            display: "inline-block"
          }}
        >
          <CardTitle
            style={{
              color: "white",
              height: "176px",
              background: `url(${Sbi})center / cover`
            }}
          >
          
          </CardTitle>
          <CardText>
         Use this Coupon to get 5% Discount Coupon : FBSSBI5
          </CardText>
        </Card>
        <Card
          shadow={0}
          style={{
            width: "445px",
            paddingLeft: "15px",
            display: "inline-block"
          }}
        >
          <CardTitle
            style={{
              color: "black",
              height: "176px",
              background:
                `url(${Suprised}) center / cover` 
            }}
          >
           New Flights for Delhi and Pune.
          </CardTitle>
          <CardText>
          Grab upto Rs 1200 discount ! Coupon: FBSNFDP
          </CardText>
        </Card>
        <Card
          shadow={0}
          style={{
            width: "445px",
            paddingLeft: "15px",
            display: "inline-block"
          }}
        >
          <CardTitle
            style={{
              color: "black",
              height: "176px",
              background:
                `url(${HDFC}) center / cover` 
            }}
          >
               10% Instant Discount for HDFC Cards
          </CardTitle>
          <CardText>
        Coupon : FBSHDFC
          </CardText>
        </Card>
      </div>
    );
  }
}
