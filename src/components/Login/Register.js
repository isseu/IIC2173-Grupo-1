import React, { Component } from 'react';
import { Pager,
         Button,
         FormControl,
         FormGroup,
         ControlLabel } from 'react-bootstrap'
import MaskedInput from 'react-maskedinput'
import './Register.css'

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      bloodType: '',
      address: '',
      dateOfBirth: '',
      creditCard: '',
      password: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleBloodTypeChange = this.handleBloodTypeChange.bind(this)
    this.handleAddressChange = this.handleAddressChange.bind(this)
    this.handleDateOfBirthChange = this.handleDateOfBirthChange.bind(this)
    this.handleCreditCardChange = this.handleCreditCardChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleBloodTypeChange(e) {
    this.setState({ bloodType: e.target.value });
  }

  handleAddressChange(e) {
    this.setState({ address: e.target.value });
  }

  handleDateOfBirthChange(e) {
    this.setState({ dateOfBirth: e.target.value });
  }

  handleCreditCardChange(e) {
    this.setState({ creditCard: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <div className="Register">
        <FormGroup>
          <ControlLabel> Nombre </ControlLabel>
          <FormControl
              value={this.state.name}
              placeholder="Nombre"
              onChange={this.handleNameChange}/>
          <ControlLabel> Tipo de Sangre </ControlLabel>
          <FormControl
              value={this.state.bloodType}
              placeholder="Sangre"
              onChange={this.handleBloodTypeChange}/>
          <ControlLabel> Direccion </ControlLabel>
          <FormControl
              value={this.state.address}
              placeholder="Dirección"
              onChange={this.handleAddressChange}/>
          <ControlLabel> Fecha de Nacimiento
            <MaskedInput
                mask="11/11/1111"
                placeholder="dd/mm/yyyy"
                value={this.state.dateOfBirth}
                className="blackText"
                onChange={this.handleDateOfBirthChange}/>
          </ControlLabel>

          <ControlLabel> Tarjeta de Kredito
            <MaskedInput
                mask="1111 1111 1111 1111"
                name="card" size="20"
                value={this.state.creditCard}
                className="blackText"
                onChange={this.handleCreditCardChange}/>
          </ControlLabel>

          <ControlLabel> Contraseña </ControlLabel>
          <FormControl
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

export default Register;
