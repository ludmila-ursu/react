import React from 'react';
import './App.css';

const Card = props => {
    console.log(props);
    return (
      <div className="card">
          {//<img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{width:'100%'}}/> 
          }       
          <img src={props.avatar} alt="Avatar" style={{width:'100%'}}/> 
          <div className="container">
                <p><button className = "button" onClick = {props.onChangeName}>Change Name</button></p>
                <h4><b>{props.name}</b></h4> 
                <input type="text" onChange = {props.onChangeInput} value={props.name}/>
                <p>{props.title}</p> 
                <div>{props.children}</div>
          </div>         
        </div>
    );
};

export default Card;