import React, { Component } from 'react';
import { Pager,
         Button,
         FormControl,
         FormGroup,
         ControlLabel } from 'react-bootstrap'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <div className="Login">
        <FormGroup>
          <ControlLabel> Nombre </ControlLabel>
          <FormControl
              componentClass="input"
              value={this.state.name}
              placeholder="Usuario"
              onChange={this.handleNameChange}/>
          <ControlLabel> Contraseña </ControlLabel>
          <FormControl
              componentClass="input"
              type="password"
              value={this.state.password}
              placeholder="Contraseña"
              onChange={this.handlePasswordChange}/>
        </FormGroup>
        <Pager>
          <Button
              type="submit"
              bsStyle="success">
            Entrar
          </Button>
        </Pager>
      </div>
    )
  }

}

export default Login;
