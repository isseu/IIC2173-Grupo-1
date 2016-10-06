import React, { Component } from 'react';
import './App.css';
import { Col, Navbar, Nav, NavItem, Tooltip, OverlayTrigger } from 'react-bootstrap'
import RoomList from './RoomList'
import Chat from './Chat'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      latitude: '',
      longitude: '',
      selected_chat_room: undefined
    }
    this.handleOnChangeSelectedRoom = this.handleOnChangeSelectedRoom.bind(this)
  }

  componentWillMount() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( (position) => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          })
        }, (errorCode) => alert(errorCode) );
    }
  }

  handleOnChangeSelectedRoom(room) {
    this.setState({ selected_chat_room: room })
  }

  render() {
    var tooltip = <Tooltip id="tooltip"></Tooltip>
    if(this.state.latitude) {
       tooltip = <Tooltip id="tooltip">Lat: {this.state.latitude.toFixed(2)} Lng: {this.state.longitude.toFixed(2)}</Tooltip>
    }
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <OverlayTrigger placement="bottom" overlay={tooltip}>
                <i className="fa fa-globe fa-lg" aria-hidden="true"></i>
              </OverlayTrigger>
              &nbsp;
              GeoChat
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight className="hidden-xs">
            <NavItem href="#">
            Usuario #123
            </NavItem>
          </Nav>
        </Navbar>
        <Col xs={4} md={3} className="full_height">
        	<RoomList onClickChatRoom={this.handleOnChangeSelectedRoom} />
        </Col>
        <Col xs={8} md={9} className="full_height chat_space">
        	{this.state.selected_chat_room ? <Chat bsRecord={this.state.selected_chat_room} /> : ''}
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
