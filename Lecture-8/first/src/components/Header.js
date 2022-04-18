import React, { Component } from 'react'
import Body from './Body'
import logo from '../logo.svg';

class Header extends Component {
    render(props) {
      return (
        <div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div>{this.props.message}</div>
          </header>
          <Body number="5"/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      )
    }
  }
export default Header