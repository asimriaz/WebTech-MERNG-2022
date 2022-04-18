import React from 'react'

const Body = (props) => {
    // Declare variable
    return (
      <p>
        Edit <code>src/App.js</code> and save to reload.
        <div>{props.number}</div>
      </p>
    )
  }

export default Body