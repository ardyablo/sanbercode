import React, {Component} from 'react';

class Soal2 extends Component{
    render(){
        const array = [
            {
              nama: 'Bejo'
            },
            {
              name: 'Jhonson'
            },
            {
              jenengan: 'Budi'
            },
            {
              nami: 'Aminah'
            }
          ]

        const daftararray = array.map((elemen,index) => <p key={index}>{elemen.nama}</p>);
        console.log(daftararray.length);
        return(
            <div>
                {daftararray}
            </div>            
        )        
    }
}

export default Soal2;