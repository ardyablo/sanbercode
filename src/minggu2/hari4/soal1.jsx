import React, {Component} from 'react';

class Soal1 extends Component{
    render(){
        const numbers = [1, 3, 5, 7, 9, 11];
        const daftarnumbers = numbers.map((elemen,index) => <p key={index}>{elemen}</p>);        
        console.log(numbers);
        return(
            <div>                
                {daftarnumbers}
            </div>            
        )        
    }
}

export default Soal1;