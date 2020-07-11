import React, {Component} from 'react';
import YoutubeComp from './YoutubeComp';

class Home extends Component{
    render(){
        return(
            <div>
                <p>Youtube Component</p>
                <hr/>
                <YoutubeComp 
                    time="07.12"
                    title="Landak 1"
                    description="Oke"/>
                <YoutubeComp 
                    time="10.05"
                    title="Landak 2"
                    description="Sip"/>
                <YoutubeComp 
                    time="06.31"
                    title="Landak 3"
                    description="Jozz"/>
                <YoutubeComp/>
            </div>            
        )        
    }
}

export default Home;