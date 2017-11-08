import React, { Component } from 'react';
import '../styles/app.css';
import Item from './item';
import {Collection, CollectionItem, Row, Col} from 'react-materialize'

class List extends Component {

  render() {
    const infos = this.props.infos.map((item, i) => (
      <CollectionItem key={"collect"+i}>
        <Item date={item.date} start={item.start} end={item.end} reason={item.reason} link={item.link} key={"item"+i} id={item.id}/>
      </CollectionItem>
    ));

    return (
      <div className="list">
        <Collection>
          <CollectionItem key="collectHead">
              <Row>
              	<Col s={2} className='grid-example'>Date</Col>
              	<Col s={2} className='grid-example'>Début</Col>
              	<Col s={2} className='grid-example'>Fin</Col>
              	<Col s={4} className='grid-example'>Raison</Col>
              	<Col s={2} className='grid-example'>Détail</Col>
              </Row>
          </CollectionItem>
          {infos}
        </Collection>
      </div>
    );
  }
}

export default List;
