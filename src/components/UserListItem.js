import React, { Component } from 'react'
import './UserListItem.css'
import classNames from 'classnames'

class UserListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
    this.suscribeListeners = this.suscribeListeners.bind(this)
    this.unsuscribeListeners = this.unsuscribeListeners.bind(this)
  }

  suscribeListeners () {
    this.user_record = this.context.client.record.getRecord(this.props.dsRecord)
    this.user_record.subscribe('name', (new_name) => {
      this.setState({ name: new_name })
    }, true)
  }

  unsuscribeListeners () {
    this.user_record.discard()
  }

  componentWillMount() {
    this.suscribeListeners()
  }

  componentWillUnmount() {
    this.unsuscribeListeners()
  }

  render() {
    return (
      <li className="user-list-item">
        <div className={classNames('user-state', 'bg-primary': true, 'bg-danger': false)}></div>
        <div className="user-name">{this.props.dsRecord}</div>
      </li>
    )
  }
}

UserListItem.contextTypes = {
  client: React.PropTypes.object.isRequired
}

UserListItem.PropTypes = {
  dsRecord: React.PropTypes.string.isRequired
}

export default UserListItem;
