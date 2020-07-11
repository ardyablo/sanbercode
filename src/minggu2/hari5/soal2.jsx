import React from 'react';

class MassInput extends React.Component{
    _handleChange = (e) =>{
        this.props.onChangeMass(e.target.value);
    }

    render(){
        const {Labelberat, berat} = this.props;

        return(
            <>
                <label>
                    {Labelberat === "gram" ? "gram : " : "Kg : "}
                    <input type="number" value={berat} onChange={this._handleChange} />
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
            gram : 0,
            kg : 0
        }
    }

    onSubmit = (e) =>{
        e.preventDefault();
        alert(`gram : ${this.state.gram} setara Kg : ${this.state.kg}`);
    }

    onChangeGram = (gram) =>{
        let kg = (parseFloat(gram) / 1000).toString();
        this.setState({
            gram,
            kg
        })
    }

    onChangeKg = (kg) =>{
        let gram = (parseFloat(kg) * 1000).toString();
        this.setState({
            gram,
            kg
        })
    }

    render(){
        const {gram, kg} = this.state;
        return(
            <form onSubmit={this.onSubmit}>
                <label>gram - Kg</label>
                <br/><br/>
                <MassInput Labelberat="gram" berat={gram} onChangeMass={this.onChangeGram} />
                <MassInput Labelberat="kg" berat={kg} onChangeMass={this.onChangeKg} />
                <button type="submit">Konversi</button>
            </form>
        )
    }
}

export default App;