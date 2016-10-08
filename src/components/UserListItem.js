import React, { Component } from 'react'
import './UserListItem.css'
import classNames from 'classnames'

class UserListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <li className="user-list-item">
        <div className={classNames('user-state', 'bg-primary': true, 'bg-danger': false)}></div>
        <div className="user-name">isseu</div>
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
