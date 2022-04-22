import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

export class Header extends Component {
  render(props) {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.props.msg}
        </header>
        <Body number={[5, 6]}/>
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


//import React from 'react'

// const Body = () =>(
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
// )

const Body = ({ number }) => {
  // variable 
  return (
    <p>
      Edit <code>src/App.js</code> and save to reload.
      <br />
      {number}
    </p>
  )
}

//export default Body

//export default Header

function App() {
  return (
    <div className="App">
      <Header msg="Welcome to ReactJS"/>
    </div>
  );
}

export default App;
