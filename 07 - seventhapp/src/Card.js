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
                <h4><b>{props.name}</b></h4> 
                <p>{props.title}</p> 
                <input type="text" value={props.name} onChange={props.onChangeName}/>
                <p><button className = "button-red" onClick={props.onDelete}>Delete</button></p>
              {//  <div>{props.children}</div>
              }
          </div>         
        </div>
    );
};

export default Card;