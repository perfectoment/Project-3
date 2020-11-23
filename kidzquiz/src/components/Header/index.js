import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';




class Header extends Component {
    render() {
      return (
        <div className="appHeader">
          <Helmet
              title={consts.TITLE}
              titleTemplate={`%s - ${this.props.details}`}
          />
  
          <Navbar bg="light" variant="light" >
            <Navbar.Brand href="/">{ consts.TITLE }</Navbar.Brand>
            {
              (this.props.auth.token === '') ?
                null
              :
                (<Navbar.Collapse className="justify-content-end">
                  <Navbar.Text>
                    <a href="/logout">Logout</a>
                  </Navbar.Text>
                </Navbar.Collapse>)
            }
            </Navbar>
        </div>
      );
    }
  }
  
  export default Header;