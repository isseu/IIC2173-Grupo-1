import React, { Component } from 'react'
import './Chat.css'
import Message from './Message'
import UserListItem from './UserListItem'
import { FormControl, FormGroup, InputGroup, Button, Col } from 'react-bootstrap'
import moment from 'moment'

class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: [],
      users: [1, 2, 3]
    }
    this.handleSendMessage = this.handleSendMessage.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount() {
    this.context.client.event.subscribe('new-message-chat', (data) => {
      this.setState({ messages: this.state.messages.concat([data])}, () => {
        var node = this.refs.messages
        node.scrollTop = node.scrollHeight
      })
    })
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  handleSendMessage(e) {
    e.preventDefault()
    if(this.state.input.length === 0) return;
    this.context.client.event.emit('new-message-chat', {
      username: 'Yo',
      datetime: moment().valueOf(),
      text: this.state.input
    })
    this.setState({ input: '' });
  }

  render() {
    return (
      <div className="chat_box">
        <Col xs={12} md={9} className="chat_messages">
          <div className="chat_top">
            <h4>Chat Name</h4>
          </div>
          <div className="messages" ref="messages">
            <ul>
              {this.state.messages.map((message) => <Message data={message} key={message._id}/>)}
            </ul>
          </div>
          <div className="chat_input clearfix">
            <form onSubmit={this.handleSendMessage}>
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
                    <Button className="btn-morado" bsSize="large" onClick={this.handleSendMessage}>Enviar</Button>
                  </InputGroup.Button>
                </InputGroup>
              </FormGroup>
            </form>
          </div>
          </Col>
          <Col md={3} className="chat_user_list hidden-xs hidden-sm">
            <ul className="user-list">
              {this.state.users.map((user) => <UserListItem data={user} key={user}/>)}
            </ul>
          </Col>
      </div>
    )
  }
}

Chat.contextTypes = {
  client: React.PropTypes.object.isRequired
}

export default Chat;
