import React, { Component } from 'react';
import './Room.css';
import { ListGroupItem } from 'react-bootstrap'

class Room extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
    this.clickRoomHandle = this.clickRoomHandle.bind(this)
  }

  componentDidMount () {
    this.room_record = this.context.client.record.getRecord( this.props.dsRecord );
    this.setState({ name: this.room_record.get('name') })
    this.room_record.subscribe('name', (new_name) => {
      this.setState({ name: new_name })
    }, true)
  }

  componentWillUnmount() {
    this.world_rooms.unsubscribe()
  }

  clickRoomHandle() {
    alert(1)
  }

  render() {
    return (
      <ListGroupItem header={this.state.name} className="Room" onClick={this.clickRoomHandle}>
        {this.state.name}
      </ListGroupItem>
    )
  }
}

Room.contextTypes = {
  client: React.PropTypes.object.isRequired
}

export default Room;
