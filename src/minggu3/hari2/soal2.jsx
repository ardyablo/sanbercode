import React from 'react';

class TimeInput extends React.Component{
    _handleChange = (e) =>{
        this.props.onChangeTime(e.target.value);
    }

    render(){
        const {Labelwaktu, waktu} = this.props;

        return(
            <>
                <label>
                    {Labelwaktu === "Detik" ? "Detik : " : "Menit : "}
                    <input type="number" value={waktu} onChange={this._handleChange} />
                </label>
                <br/>
            </>
        )
    }
}

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            detik : 0,
            menit : 0
        }
    }

    onSubmit = (e) =>{
        e.preventDefault();
        alert(`Detik : ${this.state.detik} setara Menit : ${this.state.menit}`);
    }

    onChangeDetik = (detik) =>{
        let menit = (parseFloat(detik) / 60).toString();
        this.setState({
            detik,
            menit
        })
    }

    onChangeMenit = (menit) =>{
        let detik = (parseFloat(menit) * 60).toString();
        this.setState({
            detik,
            menit
        })
    }

    render(){
        const {detik, menit} = this.state;
        return(
            <form onSubmit={this.onSubmit}>
                <label>Detik - Menit</label>
                <br/><br/>
                <TimeInput Labelwaktu="Detik" waktu={detik} onChangeTime={this.onChangeDetik} />
                <TimeInput Labelwaktu="Menit" waktu={menit} onChangeTime={this.onChangeMenit} />
                <button type="submit">Konversi</button>
            </form>
        )
    }
}

export default App;