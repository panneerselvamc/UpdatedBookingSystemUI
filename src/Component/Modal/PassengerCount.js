import React, { Component } from "react";
import { Modal, Button,Col } from "react-bootstrap";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Form from 'react-bootstrap/Form';
export default class PassengerCount extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.visibility} centered size="sm">
          <Modal.Header>
            <Modal.Title>Travellers & Class</Modal.Title>
          </Modal.Header>
          <Modal.Body align="center">
            <FormControl variant="outlined" style={{ margin: "1%" }}>
              <InputLabel htmlFor="component-outlined">Adult</InputLabel>
              <OutlinedInput
                id="component-outlined"
                type="number"
                onChange={e => this.props.setAdultCount(e.target.value)}
                labelWidth={"label"}
                value={this.props.adultCount}
              />
            </FormControl>
            <FormControl variant="outlined" style={{ margin: "1%" }}>
              <InputLabel htmlFor="component-outlined">Children</InputLabel>
              <OutlinedInput
                id="component-outlined"
                onChange={e => this.props.setChildrenCount(e.target.value)}
                labelWidth={"label"}
                value={this.props.childrenCount}
              />
            </FormControl>
            <FormControl
              variant="outlined"
              style={{ margin: "1%", marginBottom: "3%" }}
            >
              <InputLabel htmlFor="component-outlined">Infant</InputLabel>
              <OutlinedInput
                id="component-outlined"
                onChange={e => this.props.setInfantCount(e.target.value)}
                labelWidth={"label"}
                value={this.props.infantCount}
              />
            </FormControl>
            <hr />
            
            <fieldset >
                  <Form.Group as={Col}  >
                   
                    <Col >
                     
                      <Form.Check
                        type="radio"
                        label="Business Class "
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        onChange={()=>{
                          this.props.setClass("Business Class")
                        }}
                       
                      />
                       <Form.Check
                        type="radio"
                        label="Economy Class "
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                        onChange={()=>{
                          this.props.setClass("Economy Class")
                        }}
                      />
                       <Form.Check
                        type="radio"
                        label="   First Class "
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        onChange={()=>{
                          this.props.setClass("First Class")
                        }}
                      />
                    </Col>
                  </Form.Group>
                </fieldset>

            {this.props.errorMessage()}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.close} disabled={this.props.errorMessage()===null && this.props.class!=null?false:true}>Apply</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
