import React, { Component } from 'react';
import '../styles/app.css';
import {Button, Row, Col} from 'react-materialize'

class Item extends Component {

  render() {
    return (
      <Row>
      	<Col s={2} className='grid-example'>{this.props.date}</Col>
      	<Col s={2} className='grid-example'>{this.props.start}</Col>
      	<Col s={2} className='grid-example'>{this.props.end}</Col>
      	<Col s={4} className='grid-example'>{this.props.reason}</Col>
      	<Col s={2} className='grid-example'><Button floating large waves='light' icon='remove_red_eye' node='a' href={"/"+this.props.id}/></Col>
      </Row>
    );
  }
}

export default Item;
