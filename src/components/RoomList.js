import React, { Component } from 'react'
import './RoomList.css'
import { ListGroup, Button } from 'react-bootstrap'
import Room from './Room'

class RoomList extends Component {

  constructor(props) {
    super(props);
    this.state = {}
    this.updateChatList = this.updateChatList.bind(this)
  }

  componentWillMount() {
    const rooms = this.context.client.record.getRecord('user-1')
    rooms.subscribe('chats', this.updateChatList)
  }

  updateChatList() {

  }

  render() {
    this.state.rooms = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
      <div className="RoomList">
        <Button bsStyle="primary" block>Nuevo Chat</Button>
        <h3>Participando ({this.state.rooms.length})</h3>
        <ListGroup>
          {this.state.rooms.map((room) => <Room data={room} key={room._id}/>)}
        </ListGroup>
        <h3>Cercanos ({this.state.rooms.length})</h3>
        <ListGroup>
          {this.state.rooms.map((room) => <Room data={room} key={room._id}/>)}
        </ListGroup>
      </div>
    );
  }
}

RoomList.contextTypes = {
  client: React.PropTypes.object.isRequired
}

export default RoomList;
