
function FollowMe(){
  /*let el = document.querySelector(".FollowMeTxt");
  let ms = 1000;
  let dist = 25;*/
  function MoveText(e, ms, dist){
    let el = e.currentTarget;
    let distance = el.getBoundingClientRect().left + dist;
    el.style.transform = `translate(${distance}px)`
    el.style.transitionProperty = 'all';
    el.style.transitionDuration = ms/1000+'s';
    el.style.transitionTimingFunction = 'ease';
    el.style.cursor = 'pointer';
  }
  return(
    <div className = 'FollowMeDiv'>
      <p className = 'FollowMeTxt' onClick = { (e) => MoveText(e, 1000, 50)}> Follow me! </p>
    </div>
  )
}

export default FollowMe;
