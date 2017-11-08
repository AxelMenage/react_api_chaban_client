import React, { Component } from 'react';
import '../styles/app.css';
import Search from '../components/search';
import List from '../components/list';
import {ProgressBar} from 'react-materialize'

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      infos: [],
      isLoaded: false,
      error: ""
    };
    this.infoListWithFilter = this.infoListWithFilter.bind(this);
  }

  componentDidMount() {
    this.infoList();
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

  infoList() {
    fetch('http://localhost:1337/')
    .then(res => this.handleErrors(res))
    .then(res => res.json())
    .then(res => this.setState({ infos: res}))
    .catch(res => console.log(res))
    .then(res => this.setState({ isLoaded: true }));
  }

  infoListWithFilter(start, end) {
    fetch("http://localhost:1337/?from="+start+"&to="+end)
    .then(res => this.handleErrors(res))
    .then(res => res.json())
    .then(res => this.setState({ infos: res }))
    .catch(res => console.log(res))
    .then(res => this.setState({ isLoaded: true }));
  }

  render() {

    const error = this.state.error !== "" ? <div className="card red lighten-5"><div className="card-content red-text"><p>{this.interpretError()}</p></div></div> : "";

    return (
      <div className="content">
        <div className="title"><h1>API Chaban</h1></div>
        <hr/>
        <Search datechange={this.infoListWithFilter}/>
        {!this.state.isLoaded ? <ProgressBar/> : <List infos={this.state.infos}/>}
        {error}
      </div>
    );
  }
}

export default HomePage;
