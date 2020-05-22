import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'

import Header from './Header';
import LeftPanel from './LeftPanel';
import Main from './Main'
import './App.css'
import Team from './Team';



const MainComponent = ({match}) => {
  return (
      <div>
          <Header projectId = {match.params.projectId} />
          <Main projectId = {match.params.projectId}  />
          
          <LeftPanel />
          
      </div>
  );
};

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <Router>
       <Switch>
         <Route path = '/:projectId' component ={MainComponent} />

        
       </Switch>
      </Router>
    );
  }
}

export default App;