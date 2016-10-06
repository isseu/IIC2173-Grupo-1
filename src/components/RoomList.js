import React, { Component } from 'react'
import './RoomList.css'
import { ListGroup, Button } from 'react-bootstrap'
import Room from './Room'

class RoomList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    }
    this.updateChatList = this.updateChatList.bind(this)
    this.handleClickNewChat = this.handleClickNewChat.bind(this)
  }

  componentWillMount() {
    this.rooms = this.context.client.record.getRecord('user-1')
    this.rooms.subscribe('chats', this.updateChatList)
    this.world_rooms = this.context.client.record.getList( 'chats' );
    this.setState({ rooms: this.world_rooms.getEntries() })
    this.world_rooms.subscribe( ( list ) => {
      this.setState({ rooms: list })
    }, false );
  }

  handleClickNewChat() {
    var id = 'chat/' + this.context.client.getUid();
    this.context.client.record.getRecord( id ).set('name', "Nombre de chat");
    this.world_rooms.addEntry( id );
  }

  updateChatList() {

  }

  render() {
    // this.state.rooms = [1, 2, 3, 4]
    return (
      <div className="RoomList">
        <Button className="btn-morado" block onClick={this.handleClickNewChat}>Nuevo Chat</Button>
        <h3>Participando ({this.state.rooms.length})</h3>
        <ListGroup>
          {this.state.rooms.map((room) => <Room dsRecord={room} key={room} />)}
        </ListGroup>
        <h3>Cercanos ({this.state.rooms.length})</h3>
        <ListGroup>
          {this.state.rooms.map((room) => <Room dsRecord={room} key={room} />)}
        </ListGroup>
      </div>
    );
  }
}

RoomList.contextTypes = {
  client: React.PropTypes.object.isRequired
}

export default RoomList;
