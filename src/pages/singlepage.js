import React from 'react';
import '../styles/app.css';
import {Row, Col, Button, Icon, ProgressBar} from 'react-materialize'

class SinglePage extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      info: {},
      isLoading: true,
      currentid: parseInt(this.props.match.params.id,10),
      error: ""
    };
  }

  componentDidMount(){
    this.info(this.props.match.params.id);
  }

  handleErrors(response) {
    if (!response.ok) {
      this.setState({ error: response.status});
      throw Error(response.status);
    }
    return response;
  }

  interpretError(){
    if(this.state.error===400){
      return "Paramètres non valides.";
    }
    else if(this.state.error===404){
      return "Aucun résultat trouvé.";
    }
    else if(this.state.error===500){
      return "Erreur du serveur";
    }
    return "Erreur.";
  }

  info(id) {
    fetch('http://localhost:1337/'+id)
    .then(res => this.handleErrors(res))
    .then(res => res.json())
    .then(res => this.setState({ info: res}))
    .catch(res => console.log(res))
    .then(res => this.setState({ isLoading: false}))
  }

  render(){

    const error = this.state.error !== "" ? <div className="card red lighten-5"><div className="card-content red-text"><p>{this.interpretError()}</p></div></div> : "";

    return (
      <div className="content">
        <div className="title"><h1>API Chaban</h1></div>
        <hr/>
        {this.state.isLoading && <ProgressBar/>}
        <Row>
          <Col s={12} className='grid-example'>Date : {this.state.info.date}</Col>
        </Row>
        <Row>
          <Col s={12} className='grid-example'>Motif: {this.state.info.reason}</Col>
        </Row>
        <Row>
          <Col s={6} className='grid-example'>Début : {this.state.info.start}</Col>
          <Col s={6} className='grid-example'>Fin : {this.state.info.end}</Col>
        </Row>
        {error}
        <Row className="nav">
          {this.state.currentid > 1 && <Button node="a" href={"/"+parseInt(this.state.currentid-1,10)} waves='light'>Précédent<Icon left>chevron_left</Icon></Button>}
          <Button node="a" href={"/"+parseInt(this.state.currentid+1,10)} waves='light'>Suivant<Icon right>chevron_right</Icon></Button>
        </Row>
        <Row >
          <Button node="a" href="/" waves='light'>Home<Icon left>home</Icon></Button>
        </Row>
      </div>
    );
  }
}

export default SinglePage;
