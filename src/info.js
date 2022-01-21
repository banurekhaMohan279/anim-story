import {useState, useEffect} from 'react';

function Info(props){

  function showPopup(){
    let popup = document.querySelector('.popup');
    popup.classList.toggle('hide');
  }

  return (
    <div className = 'info-container'>
      <div className = "popup hide"> {props.data} </div>
      <img className = 'Info-icon' src = "/info-icon.svg" alt = 'info' onMouseEnter = {showPopup} onMouseLeave = {showPopup}/>
    </div>
  )

}

export default Info;
