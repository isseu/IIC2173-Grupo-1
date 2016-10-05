import React, { Component } from 'react';
import './Room.css';
import { ListGroupItem } from 'react-bootstrap'

class Room extends Component {

  constructor(props) {
    super(props);
    this.clickRoomHandle = this.clickRoomHandle.bind(this)
  }

  clickRoomHandle() {
    alert(1)
  }

  render() {
    return (
      <ListGroupItem header="Heading 1" className="Room" onClick={this.clickRoomHandle}>
        Hola Man
      </ListGroupItem>
    )
  }
}

export default Room;
