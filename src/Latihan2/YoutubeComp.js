import React from 'react';
import './YoutubeComp.css';

const YoutubeComp = (props) =>{
    return(
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src={require('../hedgehog-pet.jpg')} alt="" />
                <p className="time">{props.time}</p>
            </div>
            <p className="tittle">{props.title}</p>
            <p className="desc">{props.description}</p>
        </div>
    )
}

YoutubeComp.defaultProps = {
    time:"00:00",
    title:"Judul",
    description:"Deskripsi"
}

export default YoutubeComp;