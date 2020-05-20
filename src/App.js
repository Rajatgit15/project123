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

  },
  {
    path: "/proj-2",

    sidebar: () => <h1>My Projects-Project 2</h1>,

  },
  {
    path: "/proj-3",

    sidebar: () => <h1>My Projects-Project 3</h1>,

  },
  {
    path: "/proj-4",

    sidebar: () => <h1>My Projects-Project 4</h1>,

  }
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSummary: false,
      isTeam: false,
      isTitle: false
    }
  }



  handleClick1 = () => {
    this.setState({
      isTitle: true,
      isSummary: true,
      isTeam: true
    })
  }

  render() {

    return (
      <Router>
        <div>
          <Layout>
            <Header className="header-main">

              {this.state.isTitle ? routes.map((route) => (

                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  component={route.sidebar}
                />

              )) : <h1>No Project Selected</h1>}
            </Header>

            <Layout>
              <Sider  className = "sider">
                <input className="search" type="text" placeholder="search..." />

                <Link to="/"></Link><br />
                <li className="link"><Link onClick={this.handleClick1} to="/proj-1"><h1>Project 1</h1></Link><div>Owner: XYZ, Date: 19/05/2020</div></li><br />
                <li className="link"><Link onClick={this.handleClick1} to="/proj-2"><h1>Project 2</h1></Link><div>Owner: XYZ, Date: 19/05/2020</div></li><br />
                <li className="link"><Link onClick={this.handleClick1} to="/proj-3"><h1>Project 3</h1></Link><div>Owner: XYZ, Date: 19/05/2020</div></li><br />
                <li className="link"><Link onClick={this.handleClick1} to="/proj-4"><h1>Project 4</h1></Link><div>Owner: XYZ, Date: 19/05/2020</div></li><br />

              </Sider>
              <Layout>

                <Content className="content">
                  <div className="link-header">
                    <Link to="/proj-123/summary">Summary</Link><span> | </span>
                    <Link to="/proj-123/team">Team Details</Link>
                  </div>

                  <Route path="/proj-123/summary" > {this.state.isSummary ? <Summary /> : ""}</Route>
                  <Route exact path="/proj-123/team"> {this.state.isTeam ? <Team /> : ""} </Route>

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

