import React, { Component } from 'react';
import '../styles/app.css';
import DateField from './date';
import {Row} from 'react-materialize'

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startdate: "",
      enddate: ""
    }
  }

  handleDateChange = (date,type) => {
     type ==="start" ? this.setState({startdate: date}) : this.setState({enddate: date});
     this.props.datechange(this.state.startdate, this.state.enddate);
 }

  render() {
    return (
      <div className="search">
        <Row>
          <DateField label="From :" placeholder="Start date..." type="start" datechange={this.handleDateChange}/>
          <DateField label="To :" placeholder="End date..." type="end" datechange={this.handleDateChange}/>
        </Row>
      </div>
    );
  }
}

export default Search;
