
import React from 'react';
import data from './data.json'
import { BrowserRouter as Router, Link,Switch, Route, Redirect} from 'react-router-dom'
import Team from './Team'


const Main = (props) => {

        console.log(props)
    return (
        <div className  = "content">
            <ul>
            <Link to = {`${props.projectId}/summary`}>Summary</Link> <span> | </span> 
            <Link to = {`${props.projectId}/team`}>Team</Link> 
              
            </ul>
            <Switch>
                
            <Route path=  {`/:${props.projectId}/team`} component ={Team}></Route>
            </Switch>

        </div>
    );
};

export default Main;