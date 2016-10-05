import React, { Component } from 'react'
import './Chat.css'
import Message from './Message'
import UserListItem from './UserListItem'
import { FormControl, FormGroup, InputGroup, Button, Col, ListGroup, ListGroupItem } from 'react-bootstrap'

class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    this.state.messages = [1,2,3,1,2,3,1,2,3,1,2,3]
    this.state.users = [1,2,3]
    return (
      <div className="chat_box">
        <Col xs={12} md={9} className="chat_messages">
          <div className="chat_top">
            <h4>Chat Name</h4>
          </div>
          <div className="messages">
            <ul>
              {this.state.messages.map((message) => <Message data={message} key={message._id}/>)}
            </ul>
          </div>
          <div className="chat_input clearfix">
            <FormGroup bsSize="large">
              <InputGroup>
                <FormControl
                  type="text"
                  value={this.state.input}
                  placeholder="Enter text"
                  onChange={this.handleChange}
                  bsSize="large"
                />
                <InputGroup.Button>
                  <Button bsStyle="primary" bsSize="large">Enviar</Button>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>
          </div>
          </Col>
          <Col md={3} className="chat_user_list hidden-xs hidden-sm">
            <ul className="user-list">
              {this.state.users.map((user) => <UserListItem data={user} key={user._id}/>)}
            </ul>
          </Col>
      </div>
    )
  }
}

export default Chat;
