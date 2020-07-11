import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
 }
  
 function App() {
  return (
    <div>
      <Welcome name="Ardy Septyanto"/>
    </div>
  );
 }

 class Soal3 extends React.Component{
    render(){
      return <App/>
    }
  }

export default Soal3;