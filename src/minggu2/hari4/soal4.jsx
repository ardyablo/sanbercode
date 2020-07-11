import React, {Component} from 'react';

class Soal4 extends Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.inputNama = React.createRef();
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.inputNama.current.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Nama:
            <input type="text" ref={this.inputNama} />            
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default Soal4;