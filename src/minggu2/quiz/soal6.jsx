import React from 'react';

class JarakInput extends React.Component{
    _handleChange = (e) =>{
        this.props.onChangeJarak(e.target.value);
    }

    render(){
        const {Labeljarak, jarak} = this.props;
        var tempjarak = "";
        if (Labeljarak === "Km")  {
            tempjarak = "Km : ";
        }
        else{
            if (Labeljarak === "m")  {
                tempjarak = "m : ";
            }
            else{
                tempjarak = "mm : ";
            }
        }

        return(
            <>                            
                <label>
                    {/* {Labeljarak === "Km" ? "Km : " : "m : "} */}
                    {tempjarak}
                    <input type="number" value={jarak} onChange={this._handleChange} />
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
            km : 0,
            m : 0,
            mm: 0
        }
    }

    onSubmit = (e) =>{
        e.preventDefault();
        alert(`Km : ${this.state.km} setara m : ${this.state.m} setara mm : ${this.state.mm}`);
    }

    onChangeKm = (km) =>{
        let m = (parseFloat(km) * 1000).toString();
        let mm = (parseFloat(km) * 1000000).toString();
        this.setState({
            km,
            m,
            mm
        })
    }

    onChangeM = (m) =>{
        let km = (parseFloat(m) / 1000).toString();
        let mm = (parseFloat(m) * 1000).toString();
        this.setState({
            km,
            m,
            mm
        })
    }

    onChangeMm = (mm) =>{
        let km = (parseFloat(mm) / 1000000).toString();
        let m = (parseFloat(mm) / 1000).toString();
        this.setState({
            km,
            m,
            mm
        })
    }

    render(){
        const {km, m, mm} = this.state;
        return(
            <form onSubmit={this.onSubmit}>
                <label>Km - m - mm</label>
                <br/><br/>
                <JarakInput Labeljarak="Km" jarak={km} onChangeJarak={this.onChangeKm} />
                <JarakInput Labeljarak="m" jarak={m} onChangeJarak={this.onChangeM} />
                <JarakInput Labeljarak="mm" jarak={mm} onChangeJarak={this.onChangeMm} />
                <button type="submit">Konversi</button>
            </form>
        )
    }
}

export default App;