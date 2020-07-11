import React from 'react';
//import "../hedgehog-pet.jpg";

function Comment(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img className="Avatar"
            src={props.avatarUrl}
            alt={props.name}
          />
          <div className="UserInfo-name">
            {props.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {props.date}
        </div>
      </div>
    );
   }

 class Soal4 extends React.Component{      
    render(){
      return (
          <div>
              <Comment text={"Percobaan"} avatarUrl={"http://www.google.co.id"} name={"Ardy Septyanto"} date={"2020-06-23"}/>
          </div>
      );
    }
  }

export default Soal4;