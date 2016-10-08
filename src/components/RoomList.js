import React, { Component } from 'react'
import './RoomList.css'
import { ListGroup, Button } from 'react-bootstrap'
import Room from './Room'

class RoomList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user_rooms: [],
      rooms: []
    }
    this.handleClickNewRoom = this.handleClickNewRoom.bind(this)
    this.handleClickGlobalRoom = this.handleClickGlobalRoom.bind(this)
  }

  componentWillMount() {
    this.user_rooms_list = this.context.client.record.getList('user-1/chats')
    this.setState({ user_rooms: this.user_rooms_list.getEntries() })
    this.user_rooms_list.subscribe( ( list ) => {
      this.setState({ user_rooms: list })
    }, false );
    this.rooms_list = this.context.client.record.getList( 'chats' );
    this.setState({ rooms: this.rooms_list.getEntries() })
    this.rooms_list.subscribe( ( list ) => {
      this.setState({ rooms: list })
    }, false );
  }

  handleClickNewRoom() {
    var id = 'chats/' + this.context.client.getUid();
    this.context.client.record.getRecord( id ).set('name', 'Nombre de chat');
    this.rooms_list.addEntry( id );
  }

  handleClickGlobalRoom(room) {
    // Add it to user list if not exists
    this.context.client.record.has('user-1/' + room, (error, hasRecord) => {
      if(this.state.user_rooms.indexOf(room) === -1 && !hasRecord) { // hasRecord esta malo
        this.user_rooms_list.addEntry( room );
      }
    })
    this.props.onClickChatRoom(room)
  }

  render() {
    return (
      <div className="RoomList">
        <Button className="btn-morado" block onClick={this.handleClickNewRoom}>Nuevo Chat</Button>
        <h3>Participando ({this.state.user_rooms.length})</h3>
        <ListGroup>
          {this.state.user_rooms.map((room) => <Room dsRecord={room} key={'l-' + room} onClick={this.props.onClickChatRoom}/>) }
        </ListGroup>
        <h3>Cercanos ({this.state.rooms.length})</h3>
        <ListGroup>
          {this.state.rooms.map((room) => <Room dsRecord={room} key={'g-' + room} onClick={this.handleClickGlobalRoom}/>) }
        </ListGroup>
      </div>
    );
  }
}

RoomList.contextTypes = {
  client: React.PropTypes.object.isRequired
}

RoomList.PropTypes = {
  onClickChatRoom: React.PropTypes.func.isRequired
}

export default RoomList;
