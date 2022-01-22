import {useNavigate} from 'react-router-dom';


function Arrow(){

  let navigate = useNavigate();

  function goToNextPage(event){
    event.preventDefault();
    navigate('/Anim-Story/FollowMe');
  }

  return (
    <img className = 'arrow' src = '/arrow-icon.svg' alt = 'arrow-icon' onClick = {goToNextPage}/>
  )
}

export default Arrow;
