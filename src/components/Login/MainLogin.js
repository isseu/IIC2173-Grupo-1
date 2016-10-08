import React, { Component } from 'react';
import { Row,
         Button,
         Col, } from 'react-bootstrap'
import Login from './Login'
import Register from './Register'
import './MainLogin.css'

class MainLogin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogin: true
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ isLogin: !this.state.isLogin });
  }
  
  render() {
    return (
      <div className="MainLogin">
        <Col xs={10} xsOffset={1} md={10} mdOffset={1}>
          <Row className="center">
            <Button
              active={this.state.isLogin}
              type="submit"
              bsSize="small"
              bsStyle="primary"
              className="separator"
              onClick={this.handleChange}>
              Entrar
            </Button>
            <Button
              active={!this.state.isLogin}
              type="submit"
              bsSize="small"
              bsStyle="info"
              className="separator"
              onClick={this.handleChange}>
              Registrar
            </Button>
          </Row>
          {this.state.isLogin ? <Login/> : <Register/>}
        </Col>
      </div>
    )
  }

}

export default MainLogin;
