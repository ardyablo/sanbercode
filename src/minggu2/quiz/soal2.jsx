import React, {Component} from 'react';

class Soal2 extends Component{
    render(){
        let activities = [
            ['Ardy','Pegawai Swasta', 'Sepak Bola'],
            ['Bayu', 'Wirausaha', 'Memancing'],
            ['Septy', 'Guru', 'Otomotif'],
        ];

        const daftaractivities = activities.map((elemen,index) =>
            <div key={index}>
                <p>Nama : {elemen[0]}</p>
                <p>Pekerjaan : {elemen[1]}</p>
                <p>Hobi : {elemen[2]}</p>
                <br/>
            </div>            
        );   
        
        return(
            <div>            
                {daftaractivities}
            </div>            
        )        
    }
}

export default Soal2;