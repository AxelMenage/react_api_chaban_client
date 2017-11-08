import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.css';
import HomePage from './pages/homepage';
import SinglePage from './pages/singlepage';
import{BrowserRouter as Router, Route} from 'react-router-dom'

class App extends React.Component{
  render(){
    return(
      <Router>
        <div>
          <Route path="/" exact component={HomePage}/>
          <Route path="/:id" component={SinglePage}/>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
