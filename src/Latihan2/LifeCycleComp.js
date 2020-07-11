import React,{Component} from 'react';

class LifeCycleComp extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:1
        }
        console.log('constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('get derived');
        return null;
    }

    componentDidMount(){
        console.log('component didmount');
        // setTimeout(() => {
        //     this.setState({
        //         count:2
        //     })
        // }, 3000);        
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('should component update');
        if (nextState.count > 5)
        {
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('get snapshot before update');
        return null; 
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('component did update');
    }

    componentWillUnmount(){
        console.log('component will mount');
    }

    changeCount = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        console.log('render');
        return(
            <div>
                <p>Sambil dilihat console log-nya ya :)</p>
                <button onClick={this.changeCount}>Pilih {this.state.count}</button>
            </div>           
        )
    }
}

export default LifeCycleComp;