import React, { Component } from 'react';
import './Room.css';
import { ListGroupItem } from 'react-bootstrap'

class Room extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  componentDidMount () {
    this.room_record = this.context.client.record.getRecord( this.props.dsRecord );
    this.setState({ name: this.room_record.get('name') })
    this.room_record.subscribe('name', (new_name) => {
      this.setState({ name: new_name })
    }, true)
  }

  componentWillUnmount() {
    this.room_record.unsubscribe()
  }

  render() {
    return (
      <ListGroupItem header={this.state.name} className="Room" onClick={() => this.props.onClick(this.props.dsRecord)}>
        {this.state.name}
      </ListGroupItem>
    )
  }
}

Room.contextTypes = {
  client: React.PropTypes.object.isRequired
}

Room.PropTypes = {
  bsRecord: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired
}

export default Room;
