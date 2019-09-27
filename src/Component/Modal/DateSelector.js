import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { DatePicker } from "rc-datepicker";
export default class DateSelector extends Component {
  render() {
    return (
      <Modal show={this.props.visibility} centered size="sm">
        <Modal.Header>
          <Modal.Title>Date</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DatePicker
          minDate={this.props.minDate}
            onChange={date =>{
              this.props.dateChangeHandler(date);
            }}
            className="my-custom-datepicker-component"
          />
        </Modal.Body>
      </Modal>
    );
  }
}
