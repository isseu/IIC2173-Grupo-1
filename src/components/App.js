import React, { Component } from 'react';
import './App.css';
import { Col, Navbar, Nav, NavItem } from 'react-bootstrap'
import RoomList from './RoomList'
import Chat from './Chat'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">GeoChat</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight className="hidden-xs">
            <NavItem eventKey={1} href="#">Usuario #123</NavItem>
          </Nav>
        </Navbar>
        <Col xs={4} md={3} className="full_height">
        	<RoomList />
        </Col>
        <Col xs={8} md={9} className="full_height">
        	<Chat />
        </Col>
      </div>
    )
  }

  getChildContext() {
    return {
      client: this.props.client
    }
  }
}

App.childContextTypes = {
  client: React.PropTypes.object.isRequired
}

export default App;
