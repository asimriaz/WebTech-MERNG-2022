import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Calc from './components/Calc';

export class Header extends Component {
  render(props) {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.props.msg}
        </header>
        <Body number="5"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React !!
        </a>
      </div>
    )
  }
}

//export default Header

// const Body = () => (
//     <div>
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//     </div>
//   )

const Body = (props) => {
  // variable declare
  return (
      <p>
        Edit <code>src/App.js</code> and save to reload.
        <br />
        {props.number}
      </p>
  )
}

//export default Body


function App() {
  return (
    <div className="App">
      {/* <Header msg="Welcome to ReactJS"/> */}
      <Calc />

    </div>
  );
}

export default App;
