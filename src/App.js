import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Team from './Team'
import Summary from './Summary'

import './App.css';


const { Header, Footer, Sider, Content } = Layout;

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div></div>,

  },
  {
    path: "/proj-1",

    sidebar: () => <h1>My Projects-Project 1</h1>,
    main: ()=> <h1>My Projects-Project 1</h1>

  },
  {
    path: "/proj-2",

    sidebar: () => <h1>My Projects-Project 2</h1>,
     main: ()=> <h1>My Projects-Project 2</h1>
  },
  {
    path: "/proj-3",

    sidebar: () => <h1>My Projects-Project 3</h1>,
    main: ()=> <h1>My Projects-Project 3</h1>

  },
  {
    path: "/proj-4",

    sidebar: () => <h1>My Projects-Project 4</h1>,
    main: ()=> <h1>My Projects-Project 4</h1>

  }
]

const Project1 =({match}) =>{
  return(
    <h1>{match.prams.summ}</h1>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
      isTeam: false,
      isTitle: false,
      isContent: false,
      isSummary:false
    }
  }



  handleClick1 = () => {
    
    this.setState({
      isTitle: true,
      isSummary:true,
      isContent:true,
      isTeam: true
    })
  }

  render() {

    return (
      <Router>
        <div>
          <Layout>
            <Header className="header-main">

              {this.state.isTitle ? routes.map((route,index) => (
          
                <Route
                key = {index}
                path= {route.path}
                exact = {route.exact}
                  component={route.sidebar}
                />

              )) : <h1>My Project</h1>}
            </Header>

            <Layout>
              <Sider  className = "sider">
                <input className="search" type="text" placeholder="search..." />

                <Link to="/"></Link><br />
                <li className="link"><Link   onClick={this.handleClick1} to="/proj-1"><h1>Project1</h1></Link><div>Owner: XYZ, Date: 19/05/2020</div></li><br />
                <li className="link"><Link onClick={this.handleClick1} to="/proj-2"><h1>Project 2</h1></Link><div>Owner: XYZ, Date: 19/05/2020</div></li><br />
                <li className="link"><Link onClick={this.handleClick1} to="/proj-3"><h1>Project 3</h1></Link><div>Owner: XYZ, Date: 19/05/2020</div></li><br />
                <li className="link"><Link onClick={this.handleClick1} to="/proj-4"><h1>Project 4</h1></Link><div>Owner: XYZ, Date: 19/05/2020</div></li><br />

              </Sider>
              <Layout>
                
                <Content className="content">
                  <div className="link-header">
                    
                    
                    {this.state.isSummary ? 
                     <Link  to="/proj-1/summary" >Summary</Link> :
                     <Link onClick = {e=> e.preventDefault()} to="/proj-1/summary" >Summary</Link>}<span> | </span>


                   {this.state.isTeam ? 
                   <Link   to="/proj-1/team">Team Details</Link>:
                   <Link onClick = {e=> e.preventDefault()}  to="/proj-1/team">Team Details</Link>}
                  </div>

                  {/* <Route path="/proj-1234/summary"  component = {Project1} > </Route> */}
                  

                  
                  <Route exact path="/proj-1/team"> {this.state.isTeam ? <Team /> : ""} </Route>
                  
                  {this.state.isContent ? <h1 className="title-wip">welcome to wipro</h1> : <h1>No project Selected</h1>}
                </Content>
                   
              </Layout>
            </Layout>
          </Layout>
        </div>
      </Router>
    )
  }
}


export default App

