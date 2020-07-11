import React, {Component} from 'react';

class Soal3 extends Component{
    state = {
        nama:"",
        gaji:0,
        jk:"1",
        programming:true,
        database:true,
        jaringan:false,
        hardware:false,
        alamat:"",
        skill:[]
    }

    ubah_nama(event){
        this.setState({
            nama:event.target.value
        })
    }

    ubah_gaji(event){
        this.setState({
            gaji:event.target.value
        })
    }

    pilih_jk = (event) =>{
        this.setState({
            jk:event.target.value
        })           
    }

    ubah_skill(event){
        this.setState({skill: Array.from(event.target.selectedOptions, (item) => item.value)});
    }

    ubah_alamat(event){
        this.setState({
            alamat:event.target.value
        })
    }

    oke(){
        alert("oke sip");
    }

    render(){    
        return(
            <div>                
                <label>Nama</label>
                <br/>
                <input type="text" value={this.state.nama} onChange={this.ubah_nama.bind(this)}/>
                <br/>

                <label>Gaji</label>
                <br/>
                <input type="number" value={this.state.gaji} onChange={this.ubah_gaji.bind(this)}/>
                <br/>

                <label>Jenis Kelamin</label>
                <br/>
                <label className="label-radio"><input type = "radio" className="radio" value = "1" checked={this.state.jk === "1"} onChange={this.pilih_jk}/>Laki-Laki</label>
                <label className="label-radio"><input type = "radio" className="radio" value = "0" checked={this.state.jk === "0"} onChange={this.pilih_jk}/>Perempuan</label>
                <br/>

                <label>Skill</label>
                <br/>
                <select multiple={true} value={this.state.skill} onChange={this.ubah_skill.bind(this)}>
                    <option value="program" >Programming</option>
                    <option value="database" >Database</option>
                    <option value="jaringan" >Jaringan</option>
                    <option value="hardware" >Hardware</option>
                </select>
                <br/>

                <label>Alamat</label>
                <br/>
                <textarea value={this.state.alamat} onChange={this.ubah_alamat.bind(this)}/>
                <br/>

                <button onClick={this.oke}>Simpan</button>
            </div>            
        )        
    }
}

export default Soal3;