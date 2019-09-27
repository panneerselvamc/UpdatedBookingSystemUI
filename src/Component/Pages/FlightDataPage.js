import React, { Component } from "react";
import Header from "../../Component/Header";
import { Button, Card, Form, Nav, Navbar ,Container,Row,Col} from "react-bootstrap";
import FlightDetailsPage from "../FlightDetailsPage";
import AirAsia from '../../Pictures/irasia.png';
import Arrow from '../../Pictures/arrow.png.png';
import Indigo from "../../Pictures/indigo.png";
export default class FlightDataPage extends Component {
  componentWillMount() {
    this.state = {
      FlightData: this.props.FlightData
    };
    console.log(this.props.FlightData);
  }
  sortAscending = () => {
    let data = this.props.FlightData;
    data.sort((a, b) => a.price - b.price);
    this.setState({ FlightData: data });
  };
  render() {
    return (
      <Header >
        {/* <div >
        <Button onClick={() => this.sortAscending()}>Ascending</Button>
        </div> */}
        
        <div style={{ width:"47%",float:"left"}}>
        {this.state.FlightData.map(data => (
          <div style={{margin:"3%"}} key={data.id}>
            <Card>
              <Card.Header>
                  <b style={{float:"left"}}>Price : {data.price}</b>
                  <b style={{float:"right"}}>Duration : {data.duration} hrs </b>
              </Card.Header>
             
              <Card.Body>
                
                <Card.Text>
                    <Card.Img src={data.flightName==="airasia"?AirAsia:Indigo} style={{width:"10%",float:"left"}}/>
                  
                  <div style={{ float: "left",marginTop:"3%" }}>
                   <b style={{padding:"0px",margin:"0px",fontSize:"20px"}}>{data.sourceAddress}</b>
                  </div>
                <div style={{ float: "right",marginTop:"3%"  }}> 
                  <b style={{padding:"0px",margin:"0px",fontSize:"20px"}}> {data.destination}</b>
                  </div>
                 
                  <Card.Img src={Arrow} style={{width:"10%",margin:"0 auto",display:"block"}}/>
                  
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" style={{ float: "right" }}>
                  Book 
                </Button>
              </Card.Footer>
            </Card>
          </div>
        ))}
        </div>
     

     <div  style={{width:"47%",float:"left"}}>
     {this.state.FlightData.map(data => (
          <div style={{margin:"3%"}} key={data.id}>
            <Card>
              <Card.Header>
                  <b style={{float:"left"}}>Price : {data.price}</b>
                  <b style={{float:"right"}}>Duration : {data.duration} hrs </b>
              </Card.Header>
             
              <Card.Body>
                
                <Card.Text>
                    <Card.Img src={data.flightName==="airasia"?AirAsia:Indigo}  style={{width:"10%",float:"left"}}/>
                  
                  <div style={{ float: "left",marginTop:"3%" }}>
                   <b style={{padding:"0px",margin:"0px",fontSize:"20px"}}>{data.sourceAddress}</b>
                  </div>
                <div style={{ float: "right",marginTop:"3%"  }}> 
                  <b style={{padding:"0px",margin:"0px",fontSize:"20px"}}> {data.destination}</b>
                  </div>
                 
                  <Card.Img src={Arrow} style={{width:"10%",margin:"0 auto",display:"block"}}/>
                  
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" style={{ float: "right" }}>
                  Book 
                </Button>
              </Card.Footer>
            </Card>
          </div>
        ))}
     </div>
     <div style={{zIndex:"0"}}></div>
   <div style={{zIndex:"1",position:"fixed",width:"100%",height:"auto",bottom: "0px",backgroundColor:"grey"}}>

   <Card style={{width:"35%",display:"inline-block",float:"left",margin:"1%",marginLeft:"2%"}}>
              <Card.Header style={{display:"contents"}}>
                  <b style={{float:"left"}}>Price : {this.state.FlightData[0].price}</b>
                  <b style={{float:"right"}}>Duration : {this.state.FlightData[0].duration} hrs </b>
              </Card.Header>
             
              <Card.Body>
                
                <Card.Text>
                    <Card.Img src={AirAsia} style={{width:"10%",float:"left"}}/>
                  
                  <div style={{ float: "left",marginTop:"3%" }}>
                   <b style={{padding:"0px",margin:"0px",fontSize:"20px"}}>{this.state.FlightData[0].sourceAddress}</b>
                  </div>
                <div style={{ float: "right",marginTop:"3%"  }}> 
                  <b style={{padding:"0px",margin:"0px",fontSize:"20px"}}> {this.state.FlightData[0].destination}</b>
                  </div>
                 
                  <Card.Img src={Arrow} style={{width:"10%",margin:"0 auto",display:"block"}}/>
                  
                </Card.Text>
              </Card.Body>
           
            </Card> 

            <Card style={{width:"35%",display:"inline-block",float:"left",margin:"1%",marginLeft:"2%"}}>
              <Card.Header style={{display:"contents"}}>
                  <b style={{float:"left"}}>Price : {this.state.FlightData[0].price}</b>
                  <b style={{float:"right"}}>Duration : {this.state.FlightData[0].duration} hrs </b>
              </Card.Header>
             
              <Card.Body>
                
                <Card.Text>
                    <Card.Img src={AirAsia} style={{width:"10%",float:"left"}}/>
                  
                  <div style={{ float: "left",marginTop:"3%" }}>
                   <b style={{padding:"0px",margin:"0px",fontSize:"20px"}}>{this.state.FlightData[0].sourceAddress}</b>
                  </div>
                <div style={{ float: "right",marginTop:"3%"  }}> 
                  <b style={{padding:"0px",margin:"0px",fontSize:"20px"}}> {this.state.FlightData[0].destination}</b>
                  </div>
                 
                  <Card.Img src={Arrow} style={{width:"10%",margin:"0 auto",display:"block"}}/>
                  
                </Card.Text>
              </Card.Body>
            
            </Card>
            <Button variant="success" size="lg" style={{margin:"0 auto",display:"block",marginTop:"2%"}} >Book Now</Button>
   </div>
      </Header>
    );
  }
}
{/* <FlightDetailsPage FlightData={this.props.FlightData}/> */}