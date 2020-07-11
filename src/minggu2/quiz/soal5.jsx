import React, {Component} from 'react';

class Soal5 extends Component{
    state = {        
        jk:"1",   
        skill:[]     
    }

    pilih_jk = (event) =>{
        this.setState({
            jk:event.target.value
        })           
    }

    ubah_skill(event){
        this.setState({skill: Array.from(event.target.selectedOptions, (item) => item.value)});
    }

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.inputNama = React.createRef();
        this.inputTglMasuk = React.createRef();
        this.inputGaji = React.createRef();        
        this.inputSkill = React.createRef();
        this.inputAlamat = React.createRef();     
    }

    handleSubmit(event) {
        alert("Terima Kasih "+this.inputNama.current.value);
        alert("Nama Berkas : "+this.inputSlipGaji.current.files[0].name);
        event.preventDefault();
      }

    render(){    
        return(     
            <form onSubmit={this.handleSubmit}>                
                <label>Nama</label>
                <br/>
                <input type="text" ref={this.inputNama}/>
                <br/>

                <label>Gaji</label>
                <br/>
                <input type="number" ref={this.inputGaji}/>
                <br/>

                <label>Tgl. Masuk Kerja</label>
                <br/>
                <input type="date" ref={this.inputTglMasuk}/>
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
                <textarea ref={this.inputAlamat}/>
                <br/>

                <input type="submit" value="submit"/>
            </form>            
        )        
    }
}

export default Soal5;