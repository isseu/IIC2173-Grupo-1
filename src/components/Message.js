import React, { Component } from 'react';
import './Message.css';

class Chat extends Component {
  // http://bootsnipp.com/snippets/ZlkBn
  render() {
    return (
      <li className="message right appeared">
        <div className="avatar"></div>
        <div className="text_wrapper">
          <div className="text">Mensaje Mensaje</div>
        </div>
      </li>
    )
  }
}

export default Chat;
