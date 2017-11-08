import React, { Component } from 'react';
import '../styles/app.css';
import {Col, Input} from 'react-materialize'
import moment from 'moment'

class DateField extends Component {

  convertDate(string){
    const date = moment(string, "D MMMM, YYYY")
    if(date.isValid()){
      return date.format("DD-MM-YY");
    }else{
      return "";
    }
  }

  handleChange(event){
    event.target.value = this.convertDate(event.target.value);
    this.props.datechange(event.target.value, this.props.type);
  }

  render() {
    return (
      <Col s={6} className='grid-example'>
        <Input label={this.props.label} type="date" className="form-control" placeholder={this.props.placeholder} onChange={this.handleChange.bind(this)}/>
      </Col>
    );
  }
}

export default DateField;
