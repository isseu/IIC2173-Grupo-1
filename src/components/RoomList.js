import React, { Component } from 'react'
import './RoomList.css'
import { ListGroup } from 'react-bootstrap'
import Room from './Room'

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    this.state.rooms = [1, 2, 3]
    return (
      <div className="RoomList">
        <ListGroup>
          {this.state.rooms.map((room) => <Room data={room} key={room._id}/>)}
        </ListGroup>
      </div>
    );
  }
}

export default RoomList;
