import React from 'react';

function About() {
  let style={
    color:"blue",
    fontSize:"30px",
    textAlign:"center"
  }
  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome to the About page!</p>
      <p style={style}>This is a basic para for testing</p>
    </div>
  );
}

export default About;
