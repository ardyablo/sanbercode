import React from 'react';

class Soal3 extends React.Component{
    // state = {
    //     counter:1
    // }

    constructor(props) {
        super(props);
        this.state = {counter: 1};
        this.setState({
            counter:2
        })
    }

    tambah = () =>{
        this.setState({
            counter:this.state.counter+1
        })
    }

    render(){
      return (
          <div>
              <p>{this.state.counter}</p>
              <button onClick={this.tambah}>Tambah</button>
          </div>        
      )
    }
  }

  export default Soal3;