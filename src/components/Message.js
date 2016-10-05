import React, { Component } from 'react';
import './Message.css';
import moment from 'moment'

class Chat extends Component {
  // http://bootsnipp.com/snippets/ZlkBn
  render() {
    return (
      <li className="message appeared">
        <div className="message-user-name">
          <b>{this.props.data.username}</b>&nbsp;
          <small>{moment(this.props.data.datetime).format('LT')}</small>
        </div>
        <div className="text-wrapper">
          <div className="text">{this.props.data.text}</div>
        </div>
      </li>
    )
  }
}

export default Chat;
