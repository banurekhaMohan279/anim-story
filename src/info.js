import {useState, useEffect} from 'react';

function Info(props){

/* onMouseEnter/Leave
 function showPopup(){
    let popup = document.querySelector('.popup');
    popup.classList.toggle('hide');
  }*/

  return (
    <div className = 'info-container'>
      <img className = 'Info-icon' src = "/info-icon.svg" alt = 'info' />
      <div className = "popup hide"> {props.data} </div>
    </div>
  )

}

export default Info;
